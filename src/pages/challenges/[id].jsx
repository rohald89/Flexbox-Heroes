import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { remarkCodeHike } from '@code-hike/mdx';
import { CH } from '@code-hike/mdx/dist/components.cjs.js';
import theme from 'shiki/themes/nord.json';
import CodeEditor from '../../components/CodeEditor';
import GameBoard from '../../components/GameBoard';
import { setActiveChallenge } from '../../app/challengeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllChallenges, fetchChallengeById } from '../../lib/hygraph';
import PageWrapper from './../../styles/PageWrapper';

export default function ChallengePage({ source, challenge }) {
  const { title, solution, flexItems, boilerplate } = challenge;

  const { correctAnswer } = useSelector((state) => state.challenge);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveChallenge(challenge.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageWrapper>
      <div className="left-side">
        <h1>{title}</h1>
        <MDXRemote {...source} components={{ CH }} />
        <CodeEditor boilerplate={boilerplate} />
      </div>
      <GameBoard solution={solution} elements={flexItems} />
      {
      correctAnswer ? <h1>Got it!</h1> : <h1>Keep trying</h1>
    }
    </PageWrapper>
  );
}

export async function getStaticProps({ params }) {
  const data = await fetchChallengeById(params.id);

  const mdxSource = await serialize(data.challenge.description, {
    mdxOptions: {
      remarkPlugins: [[remarkCodeHike, { autoImport: false, theme }]],
      useDynamicImport: true,
    },
  });

  // clean solution object to only hold properties that aren't default
  const solution = data.challenge.solution;
  Object.keys(solution).forEach((key) => {
    return solution[key] == null && delete solution[key];
    /* solution[key] = solution[key].replace('_', '-') */
  });

  // format the values correctly to have `-` rather than `_` as required in the CMS
  Object.keys(solution).forEach(
    (key) => (solution[key] = solution[key].replace('_', '-'))
  );
  console.log(data.challenge.solution);
  return {
    props: {
      source: mdxSource,
      challenge: data.challenge,
    },
  };
}

export async function getStaticPaths() {
  const challenges = await fetchAllChallenges();

  return {
    paths: challenges.map((challenge) => ({
      params: { id: challenge.id.toString() },
    })),
    fallback: false,
  };
}

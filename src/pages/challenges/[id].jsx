/* import { getChallengeById } from "../../utils/mdx"; */
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote"
import { remarkCodeHike } from "@code-hike/mdx"
import { CH } from "@code-hike/mdx/dist/components.cjs.js"
import theme from "shiki/themes/nord.json"
import CodeEditor from "../../components/CodeEditor";
import GameBoard from "../../components/GameBoard";
import styled from "styled-components";
import { setActiveChallenge } from "../../app/challengeSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllChallenges, fetchChallengeById } from "../../lib/hygraph";


const ChallengeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

export default function ChallengePage({ source, challenge }) {
    const { title, solution, flexItems, boilerplate } = challenge;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveChallenge(challenge.id));
    }, []);

    return (
        <ChallengeWrapper>
            <div>
                <h1>{title}</h1>
                <MDXRemote {...source} components={{CH}}/>
                <CodeEditor boilerplate={boilerplate} />
            </div>
            <GameBoard solution={solution} elements={flexItems} />
        </ChallengeWrapper>
    )
}

export async function getStaticProps({ params }) {
    const data = await fetchChallengeById(params.id);

    const mdxSource = await serialize(data.challenge.description, {
        mdxOptions: {
            remarkPlugins: [[remarkCodeHike, {autoImport: false, theme }]],
            useDynamicImport: true,
        }
    });

    return {
        props: {
                source: mdxSource,
                challenge: data.challenge,
        }
    }
}

export async function getStaticPaths() {
    const challenges = await fetchAllChallenges();

    return {
        paths: challenges.map((challenge) => ({
            params: { id: challenge.id.toString() },
        })),
        fallback: false,
    }
}

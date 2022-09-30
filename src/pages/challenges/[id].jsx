import { getAllChallenges, getChallengeById } from "../../utils/mdx";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote"
import { remarkCodeHike } from "@code-hike/mdx"
import { CH } from "@code-hike/mdx/dist/components.cjs.js"
import theme from "shiki/themes/nord.json"
import CodeEditor from "../../components/CodeEditor";
import GameBoard from "../../components/GameBoard";
import styled from "styled-components";

const ChallengeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

export default function PropertyPage({ challenge }) {
    const { title, solution, boilerplate } = challenge.frontmatter;
    console.log(challenge.frontmatter);
    return (
        <ChallengeWrapper>
            <div>
                <h1>{title}</h1>
                <MDXRemote {...challenge.source} components={{CH}}/>
                <CodeEditor boilerplate={boilerplate} />
            </div>
            <GameBoard solution={solution}/>
        </ChallengeWrapper>
    )
}

export async function getStaticProps({ params }) {
    const { content, frontmatter } = await getChallengeById(params.id);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [[remarkCodeHike, {autoImport: false, theme }]],
            useDynamicImport: true,
        }
    });

    return {
        props: {
            challenge: {
                source: mdxSource,
                frontmatter,
            }
        }
    }
}

export async function getStaticPaths() {
    const challenges = await getAllChallenges();

    return {
        paths: challenges.map((challenge) => ({
            params: { id: challenge.id.toString() },
        })),
        fallback: false,
    }
}

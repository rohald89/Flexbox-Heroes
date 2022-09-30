import { getAllChallenges, getChallengeById } from "../../utils/mdx";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote"
import { remarkCodeHike } from "@code-hike/mdx"
import { CH } from "@code-hike/mdx/dist/components.cjs.js"
import theme from "shiki/themes/nord.json"
import CodeEditor from "../../components/CodeEditor";
import GameBoard from "../../components/GameBoard";
import styled from "styled-components";
import { useState } from "react";

const ChallengeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

export default function ChallengePage({ challenge }) {
    const { title, solution, elements, boilerplate } = challenge.frontmatter;
    const { source } = challenge;

    const [answerInput, setAnswerInput] = useState("");

    return (
        <ChallengeWrapper>
            <div>
                <h1>{title}</h1>
                <MDXRemote {...source} components={{CH}}/>
                <CodeEditor boilerplate={boilerplate} setAnswerInput={setAnswerInput} />
            </div>
            <GameBoard solution={solution} elements={elements} answerInput={answerInput} />
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

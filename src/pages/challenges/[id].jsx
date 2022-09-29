import { getAllChallenges, getChallengeById } from "../../utils/mdx";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote"
import { remarkCodeHike } from "@code-hike/mdx"
import { CH } from "@code-hike/mdx/dist/components.cjs.js"
import theme from "shiki/themes/nord.json"
import CodeEditor from "../../components/CodeEditor";
import GameBoard from "../../components/GameBoard";

export default function PropertyPage({ challenge }) {
    const { answer, boilerplate } = challenge.frontmatter;
    console.log(challenge.frontmatter);
    return (
        <>
        <div>
            <h1>Hello</h1>
            <MDXRemote {...challenge.source} components={{CH}}/>
            <CodeEditor boilerplate={boilerplate} />
        </div>
        <GameBoard answer={answer}/>
        </>
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

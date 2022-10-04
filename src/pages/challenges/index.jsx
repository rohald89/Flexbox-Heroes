import { fetchAllChallenges } from "../../lib/hygraph";

/* const { getAllChallenges } = require("../../utils/mdx") */

export default function PropertyPage({ challenges }) {
    return (
        <div>
            <h1>Challenges</h1>
            <ul>
                {challenges.map((challenge) => (
                    <li key={challenge.slug}>
                        <a href={`/challenges/${challenge.id}`}>{challenge.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() { 
/*     const challenges = await getAllChallenges(); */
    const challenges = await fetchAllChallenges();

  console.log(challenges);

    return { props: { challenges } }
}

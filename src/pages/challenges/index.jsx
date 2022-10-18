import { fetchAllChallenges } from "../../lib/hygraph";
import PageWrapper from "../../styles/PageWrapper";


export default function PropertyPage({ challenges }) {
    return (
        <PageWrapper>
            <h1>Challenges</h1>
            <ul>
                {challenges.map((challenge) => (
                    <li key={challenge.slug}>
                        <a href={`/challenges/${challenge.id}`}>{challenge.title}</a>
                    </li>
                ))}
            </ul>
        </PageWrapper>
    )
}

export async function getStaticProps() {
    const challenges = await fetchAllChallenges();

  console.log(challenges);

    return { props: { challenges } }
}

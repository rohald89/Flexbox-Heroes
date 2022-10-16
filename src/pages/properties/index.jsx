import PageWrapper from "../../styles/PageWrapper"
import { fetchAllProperties } from '../../lib/hygraph';

export default function PropertyPage({ properties }) {
    return (
        <PageWrapper>
            <h1>Properties</h1>
            <ul>
                {properties.map((property) => (
                    <li key={property.slug}>
                        <a href={`/properties/${property.slug}`}>{property.name}</a>
                    </li>
                ))}
            </ul>
        </PageWrapper>
    )
}

export async function getStaticProps() {
    const properties = await fetchAllProperties()

    return { props: { properties } }
}

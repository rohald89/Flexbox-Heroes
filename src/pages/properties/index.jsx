import PageWrapper from "../../styles/PageWrapper"

const { getAllProperties } = require("../../utils/mdx")

export default function PropertyPage({ properties }) {
    return (
        <PageWrapper>
            <h1>Properties</h1>
            <ul>
                {properties.map((property) => (
                    <li key={property.slug}>
                        <a href={`/properties/${property.slug}`}>{property.title}</a>
                    </li>
                ))}
            </ul>
        </PageWrapper>
    )
}

export async function getStaticProps() {
    const properties = await getAllProperties()

    return { props: { properties } }
}

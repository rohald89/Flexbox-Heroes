import { getAllProperties, getPropertyFromSlug } from "../../utils/mdx";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote"
import { remarkCodeHike } from "@code-hike/mdx"
import { CH } from "@code-hike/mdx/dist/components.cjs.js"
import theme from "shiki/themes/nord.json"
import PageWrapper from "../../styles/PageWrapper";

export default function PropertyPage({ property }) {
    return (
        <PageWrapper>
            <MDXRemote {...property.source} components={{CH}}/>
        </PageWrapper>
    )
}

export async function getStaticProps({ params }) {
    const { content, frontmatter } = await getPropertyFromSlug(params.slug);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [[remarkCodeHike, {autoImport: false, theme }]],
            useDynamicImport: true,
        }
    });

    return {
        props: {
            property: {
                source: mdxSource,
                frontmatter,
            }
        }
    }
}

export async function getStaticPaths() {
    const properties = await getAllProperties();

    return {
        paths: properties.map((property) => ({
            params: { slug: property.slug },
        })),
        fallback: false,
    }
}

import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { sync } from 'glob';

const challengePath = path.join(process.cwd(), './src/data/challenges');
const propertyPath = path.join(process.cwd(), './src/data/properties');

export async function getSlug() {
    const paths = sync(`${propertyPath}/**/*.mdx`);

    return paths.map((filePath) => {
        const pathContent = filepath.split('/');
        const fileName = pathContent[pathContent.length - 1];
        const [ slug, _extension ] = fileName.split('.');

        return slug;
    });
}

export async function getPropertyFromSlug(slug) {
    const propertyDir = path.join(propertyPath, `${slug}.mdx`)
    const source = fs.readFileSync(propertyDir)
    const { content, data } = matter(source)

    return {
      content,
      frontmatter: {
        slug,
        excerpt: data.excerpt,
        title: data.title,
        ...data,
      },
    }
  }

export async function getChallengeById(id) {
    const challengeDir = path.join(challengePath, `${id}.mdx`)
    const source = fs.readFileSync(challengeDir)
    const { content, data } = matter(source)

    return {
      content,
      frontmatter: {
        id,
        excerpt: data.excerpt,
        title: data.title,
        ...data,
      },
    }
  }

export async function getAllProperties() {
    const properties = fs.readdirSync(propertyPath);

    return properties.reduce((allProperties, propertySlug) => {
        const source = fs.readFileSync(
            path.join(propertyPath, propertySlug),
            'utf8'
        );
        const { content, data } = matter(source);

        return [
            {
                content,
                ...data,
                slug: propertySlug.replace('.mdx', ''),
            },
            ...allProperties,
        ];
    }, []);
}

export async function getAllChallenges() {
    const challenges = fs.readdirSync(challengePath);

    return challenges.reduce((allChallenges, challengeSlug) => {
        const source = fs.readFileSync(
            path.join(challengePath, challengeSlug),
            'utf8'
        );
        const { content, data } = matter(source);

        return [
            {
                content,
                ...data,
                slug: challengeSlug.replace('.mdx', ''),
            },
            ...allChallenges,
        ];
    }, []);
}

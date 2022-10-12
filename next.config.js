/** @type {import('next').NextConfig} */
const theme = require("shiki/themes/nord.json")
const {
  remarkCodeHike,
} = require("@code-hike/mdx")

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [
        [remarkCodeHike, { theme }],
      ],
      rehypePlugins: [],
      // If you use `MDXProvider`, uncomment the following line.
      // providerImportSource: "@mdx-js/react",
    },
  })
  module.exports = withMDX({
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
    };
    return config;
},
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  })

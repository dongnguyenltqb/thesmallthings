require("dotenv").config()
const nextMDX = require("@next/mdx")
const withCSS = require("@zeit/next-css")
const remarkImages = require("remark-images")
const rehypeSlug = require("rehype-slug")
const rehypeShiki = require("rehype-shiki")
const rehypeAutoLink = require("rehype-autolink-headings")

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      [rehypeShiki, { theme: "./src/code-theme.json" }],
      rehypeSlug,
      [
        rehypeAutoLink,
        {
          behavior: "append",
          content: {
            type: "element",
            tagName: "svg",
            properties: {
              className: "fill-current",
              width: 16,
              height: 16,
            },
            children: [
              {
                type: "element",
                tagName: "use",
                properties: { xlinkHref: "/assets/icons.svg#link" },
              },
            ],
          },
        },
      ],
    ],
    remarkPlugins: [remarkImages],
  },
})

const nextConfig = {
  devIndicators: {
    autoPrerender: false,
  },
  pageExtensions: ["js", "md", "mdx"],
  poweredByHeader: false,
  env: {
    chatId: process.env.CHAT_ID,
    botToken: process.env.BOT_TOKEN,
  },
}

module.exports = withCSS(withMDX(nextConfig))

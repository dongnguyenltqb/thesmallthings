require("dotenv").config()
const nextMDX = require("@next/mdx")
const remarkImages = require("remark-images")
const rehypeSlug = require("rehype-slug")
const rehypeShiki = require("rehype-shiki")

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeShiki, { theme: "./src/code-theme.json" }],
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

module.exports = withMDX(nextConfig)

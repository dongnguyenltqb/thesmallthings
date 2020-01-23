import Head from "next/head"

const config = {
  author: "Hai Nguyen",
  url: "http://thesmallthings.dev",
  title: "The Small Things — Little corner on the Internet",
  description: "Personal website by Hai Nguyen.",
  image: "/assets/images/cover.png",
}

export default function SEO({
  title = config.title,
  description = config.description,
  image = config.image,
  slug,
}) {
  const url = `${config.url}${slug}`
  const previewImage = `${config.url}${image}`
  return (
    <Head>
      {/* General tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="image" content={previewImage} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={slug ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={previewImage} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={previewImage} />
    </Head>
  )
}

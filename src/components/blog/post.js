import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { postTranstion } from "../../constants"
import Page from "../page"
import components from "./mdx-components"
import SEO from "../seo"

export default function Post(meta = {}) {
  return ({ children }) => {
    return (
      <MDXProvider components={components}>
        <Page variants={postTranstion}>
          <article>
            <SEO {...meta} />
            <h1 className="mb-2">{meta.title}</h1>
            {children}
          </article>
        </Page>
      </MDXProvider>
    )
  }
}

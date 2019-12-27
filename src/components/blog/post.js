import React from "react"
import { MDXProvider } from "@mdx-js/react"

import components from "./mdx-components"
import Page from "../page"

export default function Post(meta) {
  return ({ children }) => {
    return (
      <MDXProvider components={components}>
        <Page>
          <article>
            <h1>{meta.title}</h1>
            {children}
          </article>
        </Page>
      </MDXProvider>
    )
  }
}

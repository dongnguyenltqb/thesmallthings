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
            {meta && <h1 className="mb-2">{meta.title}</h1>}
            {children}
          </article>
        </Page>
      </MDXProvider>
    )
  }
}

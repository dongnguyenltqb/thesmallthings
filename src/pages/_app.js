import "lazysizes"
import "lazysizes/plugins/attrchange/ls.attrchange"
import React from "react"
import App from "next/app"
import Head from "next/head"

import "../styles/index.css"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import Nprogress from "../components/nprogress"
import BottomNavigation from "../components/bottom-navigation"

import { menus } from "../constants"

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.StrictMode>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#24292e" />
          <meta name="apple-mobile-web-app-title" content="The Small Things" />
          <meta name="application-name" content="The Small Things" />
          <meta name="msapplication-TileColor" content="#1366E9" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <SEO />
        <div className="w-full text-black bg-white">
          <Sidebar menus={menus} className="hidden desktop:flex" />
          <main className="pb-16 desktop:ml-64">
            <Component {...pageProps} />
          </main>
          <BottomNavigation menus={menus} className="desktop:hidden" />
          <Nprogress />
        </div>
      </React.StrictMode>
    )
  }
}

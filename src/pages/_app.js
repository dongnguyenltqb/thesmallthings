import React from "react"
import App from "next/app"

import "../styles/index.css"
import Sidebar from "../components/sidebar"
import Nprogress from "../components/nprogress"
import BottomNavigation from "../components/bottom-navigation"

import { menus } from "../constants"

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.StrictMode>
        <div className="w-full h-screen bg-white text-cinder light">
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

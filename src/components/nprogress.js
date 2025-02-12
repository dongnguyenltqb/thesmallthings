import Router from "next/router"
import Nprogress from "nprogress"

import { pageView } from "../lib/gtag"

Nprogress.configure({ showSpinner: false, minimum: 0.01, easing: "linear" })

let timeout
let timer

function startProgress() {
  // Only start the progress if the site takes too long to load
  timeout = setTimeout(() => {
    timer = setInterval(() => {
      Nprogress.inc()
    }, 100)
  }, 100)
}

function stopProgress() {
  clearInterval(timer)
  clearTimeout(timeout)
  Nprogress.done()
}

Router.events.on("routeChangeError", stopProgress)
Router.events.on("routeChangeStart", startProgress)
Router.events.on("routeChangeComplete", url => {
  stopProgress()
  pageView(url)
})

// For using as a component
export default () => null

import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function ActiveLink({ children, ...props }) {
  const router = useRouter()

  function isActive() {
    const path = props.href.substring(1, props.href.length)
    const route = router.pathname.substring(1, router.pathname.length)

    if (route.length > 0 && path.length > 0) {
      return route.includes(path)
    }

    return route === path
  }

  return (
    <Link {...props}>
      <a>{children(isActive())}</a>
    </Link>
  )
}

export const getHostUrl = req => {
  let protocol = process.env.NODE_ENV === "production" ? "https" : "http"
  const host = req
    ? req.headers["x-forwarded-host"] || req.headers.host
    : window.location.host
  if (host.match(/localhost/)) {
    protocol = "http"
  }
  return `${protocol}://${host}`
}

export const importAll = requireContext => {
  return requireContext.keys().map(requireContext)
}

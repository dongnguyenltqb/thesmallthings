export const GA_TRACKING_ID = "UA-155117044-1"

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = url => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

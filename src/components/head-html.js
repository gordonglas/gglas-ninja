import * as React from "react"

// This html gets injected at runtime.
// Use src/html.js if you need to put html at build-time.
const HeadHtml = ({pageTitle}) => {
  return (
    <>
      <title>{pageTitle}</title>
    </>
  )
}

export default HeadHtml

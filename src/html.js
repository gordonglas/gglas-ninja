// Contains some custom html that gets injected into all .html pages at build time.
// See: https://www.gatsbyjs.com/docs/custom-html/

import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Files in the /static folder get copied 'as-is' to the final site's root */}
        <link rel="apple-touch-icon" sizes="96x96" href="/img/gn/touch-icon-96-96.png" />
        {/* For Mastodon link verification: https://docs.joinmastodon.org/user/profile/#verification */}
        <link href="https://mastodon.gamedev.place/@kefka" rel="me" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

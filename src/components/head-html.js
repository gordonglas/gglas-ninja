import * as React from "react"

const HeadHtml = ({pageTitle}) => {
  return (
    <>
      <title>{pageTitle}</title>
      {/* Files in the /static folder get copied 'as-is' to the final site's root */}
      <link rel="apple-touch-icon" sizes="96x96" href="/img/gn/touch-icon-96-96.png" />
      {/* For Mastodon link verification: https://docs.joinmastodon.org/user/profile/#verification */}
      <link href="https://mastodon.gamedev.place/@kefka" rel="me" />
    </>
  )
}

export default HeadHtml

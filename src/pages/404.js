import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 30,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Link not working</title>
      <h1 style={headingStyles}>Link not working</h1>
      <p style={paragraphStyles}>
        <img src="/img/common/status-error.jpg" className="img-fluid" alt="404 - Link not working" /><br />
        Illustration by <a href="https://bumph.tumblr.com/post/72446275370/link-not-working">Andy Fanton</a>

        {process.env.NODE_ENV === "development" ? (
          <>
            <br /><br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br /><br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

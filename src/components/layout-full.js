// full-page layout (without header/footer)
import * as React from "react"
import { Helmet } from "react-helmet"

// our custom css overrides
import '../css/site.css'         // general overrides
import '../css/theme-dark.css'   // dark theme overrides

const LayoutFull = ({pageTitle, children, location}) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Helmet>
        {/* files in the /static folder get copied 'as-is' to the final site's root */}
        <link rel="apple-touch-icon" sizes="96x96" href="/img/gn/touch-icon-96-96.png" />
      </Helmet>
      <main>
        {children}
      </main>
    </div>
  )
}

export default LayoutFull

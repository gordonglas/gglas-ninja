// full-page layout (without header/footer)
import * as React from "react"

// our custom css overrides
import '../css/site.css'         // general overrides
import '../css/theme-dark.css'   // dark theme overrides

const LayoutFull = ({children, location}) => {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default LayoutFull

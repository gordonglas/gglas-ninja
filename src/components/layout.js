import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from 'gatsby'
import appSettings from "../config/app-settings"
// our custom css overrides
import '../css/site.css'         // general overrides
import '../css/theme-dark.css'   // dark theme overrides

const Layout = ({pageTitle, activeMenu, children}) => {
  const year = new Date().getFullYear();
  return (
    <div>
      <title>{pageTitle}</title>
      <Helmet>
        {/* files in the /static folder get copied 'as-is' to the final site's root */}
        <link rel="apple-touch-icon" sizes="96x96" href="/img/gn/touch-icon-96-96.png" />
      </Helmet>
      <nav className="navbar navbar-expand-md bg-primary navbar-dark navbar-fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{appSettings.siteTitle}</Link>

          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
                aria-expanded="false" aria-controls="collapsibleNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="collapsibleNavbar" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={activeMenu === 'Blog' ? 'nav-link active' : 'nav-link'} to="/"><i className="bi bi-newspaper"></i> Blog</Link>
              </li>
              <li className="nav-item">
                <Link className={activeMenu === 'Projects' ? 'nav-link active' : 'nav-link'} to="/projects"><i className="bi bi-diagram-3"></i> Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-md-2"></div>
            <div className="col-sm-2 col-md-2">
                <div className="gn-ninja"></div>
            </div>
            <div className="col-sm-4 col-md-4">
              <ul className="list-inline">
                <li className="list-inline-item"><a href="/rss.xml" title="Subscribe via RSS"><i className="bi bi-rss-fill"></i> RSS</a></li>
                <li className="list-inline-item"><Link to="/about"><i className="bi bi-info-circle-fill"></i> About</Link></li>
              </ul>
              <p>&copy; {year} Gordon Glas</p>
            </div>
            <div className="col-sm-4 col-md-4">
              <a href="https://twitter.com/alphatrak" style={{ marginRight: 10 }}><div className="twitter-icon" aria-label="My Twitter account"></div></a>
              <a href="https://github.com/gordonglas"><div className="github-icon" aria-label="My github account"></div></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

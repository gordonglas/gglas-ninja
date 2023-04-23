import * as React from 'react'
import { Link, graphql } from 'gatsby'
import appSettings from "../config/app-settings"
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle={appSettings.siteTitle} activeMenu="Blog">
      <div className="container-fluid pt-3">
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <div className="row">
                <div className="col-sm-12 news-post-preview">
                  <div className="card col-sm-12 px-3 shadow-sm" style={{ marginBottom: 30}}>
                    <h2 style={{ marginTop: 10 }}>
                      <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                    </h2>
                    <div className="date">{node.frontmatter.date}</div>
                    <p className="news-content-preview">
                      {node.excerpt}
                    </p>
                    <p className="read-more">
                      <Link to={`/blog/${node.frontmatter.slug}`}>Read more</Link>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </Layout>
  )
}

// ignore files in the ".obsidian" folder
export const query = graphql`
query {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      frontmatter {
        title
        slug
        tags
        date(formatString: "MMMM D, YYYY")
      }
      id
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM D, YYYY")
        }
      }
      excerpt(pruneLength: 280)
    }
  }
}
`

export default IndexPage

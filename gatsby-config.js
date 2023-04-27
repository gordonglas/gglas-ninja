module.exports = {
  siteMetadata: {
    title: "GGlas Ninja",
    siteUrl: `https://gglas.ninja`,
    description: "The personal blog of Gordon Glas"
  },
  trailingSlash: "ignore",
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              backgroundColor: "none",
            },
          },
        ],
      }
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  data: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + "/blog/" + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + "/blog/" + edge.node.frontmatter.slug,
                  // Since gatsby v5, the allMdx.edges.node.html field is gone.
                  //custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { frontmatter: { date: DESC } }
                filter: {frontmatter: {published: {eq: true}}}
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 280)
                    frontmatter {
                      title
                      slug
                      date
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: `gglas.ninja - blog`,
            site_url: `https://gglas.ninja`,
          },
        ],
      }
    },
  ],
}

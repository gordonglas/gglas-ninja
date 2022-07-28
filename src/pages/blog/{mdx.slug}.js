import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import appSettings from "../../config/app-settings"
import Layout from '../../components/layout'
import '../../css/prism.css' // syntax highlighting lib

class NewsPost extends React.Component {
  constructor(props) {
    super(props);
    this.prismScriptLoaded = false;
    this.issoScriptLoaded = false;
  }

  componentDidMount () {
    if (!this.prismScriptLoaded) {
      this.prismScriptLoaded = true;

      let script = document.createElement("script");
      script.src = "/js/prism.js";
      script.async = true;

      document.body.appendChild(script);
    }

    if (!this.issoScriptLoaded) {
      this.issoScriptLoaded = true;

      // load/run isso js
      let script = document.createElement("script");
      script.src = "/comments/js/embed.min.js";
      script.async = true;
      //script.onload = () => this.issoScript_onLoad();

      // set isso client-side config via data-* attributes
      script.dataset.isso = "/comments/";
      script.dataset.issoCss = "true";
      script.dataset.issoLang = "en";
      script.dataset.issoReplyToSelf = "false";
      script.dataset.issoRequireAuthor = "true";
      script.dataset.issoRequireEmail = "false";
      script.dataset.issoMaxCommentsTop = "10";
      script.dataset.issoMaxCommentsNested = "5";
      script.dataset.issoRevealOnClick = "5";
      script.dataset.issoAvatar = "true";
      script.dataset.issoAvatarBg = "#f0f0f0";
      script.dataset.issoAvatarFg = "#9abf88 #5698c4 #e279a3 #9163b6 ...";
      script.dataset.issoVote = "true";
      script.dataset.voteLevels = "";

      document.body.appendChild(script);
    }
  }

  //issoScript_onLoad() {
  //  console.log("issoScript_onLoad called");
  //}

  render () {
    return (
      <Layout pageTitle={appSettings.formatTitle(this.props.data.mdx.frontmatter.title)} activeMenu="Blog">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 news-post">
              <div className="card col-sm-12 px-3 shadow-sm">
                <h2 style={{ marginTop: 10 }}>{this.props.data.mdx.frontmatter.title}</h2>
                <div className="date">{this.props.data.mdx.frontmatter.date}</div>
                <div className="news-content">
                  <MDXRenderer>
                    {this.props.data.mdx.body}
                  </MDXRenderer>
                </div>
                <span className="clearfix"></span>
              </div>

              <div id="site_comments">
                {/* If we could, we'd just add isso comments like this...
                    But instead we have to add it "dynamically" above in React. -_- */}
                {/* <script data-isso="/comments/"
                        data-isso-css="true"
                        data-isso-lang="en"
                        data-isso-reply-to-self="false"
                        data-isso-require-author="true"
                        data-isso-require-email="false"
                        data-isso-max-comments-top="10"
                        data-isso-max-comments-nested="5"
                        data-isso-reveal-on-click="5"
                        data-isso-avatar="true"
                        data-isso-avatar-bg="#f0f0f0"
                        data-isso-avatar-fg="#9abf88 #5698c4 #e279a3 #9163b6 ..."
                        data-isso-vote="true"
                        data-vote-levels=""
                        src="/comments/js/embed.min.js"></script> */}

                <section id="isso-thread"></section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default NewsPost

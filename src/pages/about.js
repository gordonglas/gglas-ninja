import * as React from "react"
import appSettings from "../config/app-settings"
import { StaticImage } from "gatsby-plugin-image"
import HeadHtml from '../components/head-html'
import Layout from '../components/layout'

const AboutPage = () => {
  const title = "About " + appSettings.siteTitle;
  return (
    <Layout activeMenu="None">
      <div className="jumbotron">
        <div className="container">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="container">
        <div className="row pt-4">
          <div className="card col-sm-12" style={{ paddingTop: 20, paddingBottom: 20, padding: 20 }}>
            {/* <div className="site-box"> */}
              <div className="row">
                <div className="about-me-text">
                <p>Hi, I'm Gordon, and this is my personal blog.</p>
                <p>I'll be posting my shenanigans here from time to time.</p>
                <p>A bit about me:</p>
                <p>I've been a gamer ever since my parents bought
                    the <a href="https://en.wikipedia.org/wiki/Intellivision">Intellivision</a> and
                    first took me to <a href="https://www.chuckecheese.com/">Chuck E. Cheese</a> in
                    the early 80's.
                </p>
                <p>I've been messing with computers since my parents bought an <a href="https://en.wikipedia.org/wiki/Apple_IIc">Apple IIc</a>.</p>
                <p>Now my son and I do a lot of gaming together, build LEGO, and other things.</p>
                <div>Some other things I like to do:
                  <ul>
                    <li><a href="https://github.com/gordonglas">Program computers</a>.</li>
                    <li><a href="https://overworldsoft.com">Pretend I make games</a> (at least for now.)</li>
                    <li><a href="https://soundcloud.com/alphatrak/tracks">Compose music</a></li>
                    <li>Listen to relaxing <a href="https://www.youtube.com/results?search_query=kitaro">New Age</a>, <a href="https://www.youtube.com/results?search_query=relaxing+coffee+shop+jazz">Jazz</a>, <a href="https://www.youtube.com/results?search_query=1980%27s+music">80's</a>, <a href="https://www.youtube.com/results?search_query=synthwave">Synthwave</a>, and <a href="https://www.youtube.com/results?search_query=relaxing+video+game+music">game music soundtracks</a>.</li>
                    <li>Watch space-operas.</li>
                    <li>Work on my yard.</li>
                    <li>(I want to add "Make gunpla" back to this list sometime soon. I started on an Entry-grade level model recently.)</li>
                  </ul>
                </div>
                <p>Also, I realize the "ninja" domain name sounds a bit pretentious,
                    but I thought it was cool and had to have it. 😄
                    <br />Ninja were really not like we perceive them today.</p>
                </div>
                <div className="col-sm-12 col-lg-7 site-margin">
                  <StaticImage src="../images/gordonglas.jpg" className="img-fluid rounded" alt="Gordon Glas" />
                </div>
                <div className="col-sm-12 col-lg-5">
                  <table className="table table-condensed">
                    <tbody>
                      <tr>
                        <td colSpan={2}>Contact info:</td>
                      </tr>
                      <tr>
                        <td><i className="bi bi-envelope-fill"></i> Email:</td>
                        <td><a href="mailto:gglas@overworldsoft.com">gglas@overworldsoft.com</a></td>
                      </tr>
                      <tr>
                        <td><i className="bi bi-mastodon"></i> Mastodon:</td>
                        <td><a href="https://mastodon.gamedev.place/@kefka">@kefka@mastodon.gamedev.place</a></td>
                      </tr>
                      <tr>
                        <td><i className="bi bi-twitter"></i> Twitter:</td>
                        <td><a href="https://twitter.com/alphatrak">@alphatrak</a></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td><a href="https://twitter.com/overworldsoft">@overworldsoft</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export function Head() {
  return (
    <HeadHtml pageTitle={"About " + appSettings.siteTitle} />
  )
}

export default AboutPage

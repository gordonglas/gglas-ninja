import * as React from 'react'
import appSettings from "../config/app-settings"
import Layout from '../components/layout'

class ProjectsPage extends React.Component {
  render () {
    return (
      <Layout pageTitle={appSettings.formatTitle("Projects")} activeMenu="Projects">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 news-post">
              <div className="card col-sm-12 px-3 shadow-sm">
                <h2 style={{ marginTop: 10 }}>Projects</h2>
                {/* <div className="date">July 27 2022</div> */}
                <div className="news-content">

                  <p>I'm currently concentrating on <a href="https://overworldsoft.com/news/2022/07/learning-roblox-dev">learning Roblox development</a> with my son, and
                     slowly working on my C++ game engine. I recently <a href="https://overworldsoft.com/news/2022/07/audio-engine-completed">finished the Audio engine</a> for
                     the C++ game engine.
                  </p>

                  <p>My photo/video album static site generator, <a href="https://github.com/gordonglas/tellah-photo">Tellah</a>, is now complete.</p>

                  <p>I also somewhat recently posted my old <a href="https://github.com/gordonglas/gba-breakout">GameBoy Advance Breakout</a> game source code, which is not 100% complete,
                     but is somewhat playable, and perhaps I'll finish it at some point.</p>
                </div>
                <span className="clearfix"></span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProjectsPage

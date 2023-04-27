import * as React from "react"

// Used in MDX posts to embed self-hosted videos.
// You must import the video within the same MDX file, like so:
//   import my_video from "./my-video.mp4"
// ...then the file will be copied directly under /public/static/
// with a unique hash just before the file extension.
// See: https://www.gatsbyjs.com/docs/how-to/images-and-media/working-with-video/#hosting-your-own-html5-video-files
// "EmbedVideo" is also setup as a "shortcode" in src/pages/blog/{mdx.frontmatter__slug}.js
// so you don't have to import this component directly in the MDX file.
// See: https://www.gatsbyjs.com/docs/how-to/routing/mdx/#make-components-available-globally-as-shortcodes
const EmbedVideo = ({mp4, width}) => {
  width = width ? width : 300;
  return (
    <div className="video-container">
      <video controls playsInline width={width}>
        <source src={mp4} type="video/mp4"></source>
        {/* "empty" track captions to surpress gatsby's warning about not having one. */}
        <track kind="captions"></track>
        <p>
          Your browser doesn't support HTML video. Here is a
          <a href={mp4}>link to the video</a> instead.
        </p>
      </video>
    </div>
  )
}

export default EmbedVideo

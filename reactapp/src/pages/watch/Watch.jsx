import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div
    //  className="watch"
     >
      {/* <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="http://techslides.com/demos/sample-videos/small.mp4"
      /> */}
       <iframe
    id="player"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/tnLfbN8mKbs?enablejsapi=1&mute=1"
    title="DCT introduction video"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
    </div>
  );
}

import './HomePage.scss';
import { useState } from "react";
import Header from "../../components/Header/Header.js";
import VideoNav from "../../components/VideoNav/VideoNav.js"
import VideoHero from '../../components/VideoHero/VideoHero.js';
import Comments from "../../components/Comments/Comments.js";
import Description from '../../components/Description/Description';
import Form from "../../components/Form/Form.js";
import videoDetailsData from "../../data/videoDetailsData.json";
import videos from "../../data/videos.json";

function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0])

  const videoClick = (videoId) => {

    const foundVideo = videoDetailsData.find(video => video.id === videoId)
    setSelectedVideo(foundVideo);
  }

  const filteredVideos = videos.filter(video => video.id !== selectedVideo.id)



  return (
    <div className="App">
      <Header />
      <VideoHero selectedVideo={selectedVideo} /> 
      <section className="main">
        <section className="main__main">
          <div className="main__description">
            <Description selectedVideo={selectedVideo} />
          </div>
          <div className="main__form">
            <Form selectedVideo={selectedVideo} />
          </div>
          <div className="main__comments">
            <Comments selectedVideo={selectedVideo} />
          </div>
        </section>
        <section className="main__nav">
          <div className="main__nav-bar">
            <VideoNav clickHandler={videoClick} videos={filteredVideos} />
          </div>
        </section>
      </section>
    </div>
  );
}

export default HomePage;
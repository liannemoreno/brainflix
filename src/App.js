import './App.scss';
import Header from "./components/Header/Header.js";
import VideoNav from "./components/VideoNav/VideoNav.js"
import VideoHero from './components/VideoHero/VideoHero.js';
import Comments from "./components/Comments/Comments.js";
import Form from "./components/Form/Form.js";
import videoDetailsData from "./data/videoDetailsData.json";
import videos from "./data/videos.json";
import { useState } from "react";


function App() {
  const [selectedVideo, setSelectedVideo]= useState(videoDetailsData[0])

  const videoClick = (videoId) => {

    const foundVideo = videoDetailsData.find(video =>video.id === videoId)
    setSelectedVideo(foundVideo);
  }
  
  const filteredVideos = videos.filter(video=> video.id !== selectedVideo.id)
  
  
  
  return (
    <div className="App">
      <Header/>
      <VideoHero selectedVideo={selectedVideo}/>
      <Form selectedVideo={selectedVideo}/>
      <Comments selectedVideo={selectedVideo}/>
      <VideoNav clickHandler={videoClick} videos={filteredVideos}/>
    </div>
  );
}

export default App;

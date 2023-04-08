import React from "react";
import "../VideoHero/VideoHero.scss";
import playIcon from "../../assets/Images/pause.svg";
import fullScreenIcon from "../../assets/Images/fullscreen.svg";
import volumeUpIcon from "../../assets/Images/volume_up.svg";


function VideoHero({selectedVideo}){
    return(
        <section className="hero">
            <video className="hero__video" poster={selectedVideo.image} controls></video>
        </section>
    )
}

export default VideoHero
import React from "react";
import "../VideoHero/VideoHero.scss";
import pauseIcon from "../../assets/Images/pause.svg";
import fullScreenIcon from "../../assets/Images/fullscreen.svg";
import volumeUpIcon from "../../assets/Images/volume_up.svg";


function VideoHero({selectedVideo}) {
    const {image, video, duration} = selectedVideo;
    return (
        <section className="hero">
            <div className="hero__video">
                <video className="hero__video--posted" poster={image}>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero__video-control">

                    <button className="hero__video-control-play"><img src={pauseIcon} alt="playIcon" /></button>
                    <div className="hero__video-control-bar">
                        <div className="hero__video-control-bar--bar">
                        </div>
                        <p className="hero__video-control-bar--text">0:00/{duration}</p>
                    </div>

                    <div className="hero__video-control-right">
                        <button className="hero__video-control-right--screen"><img src={fullScreenIcon} alt="full screen icon" /></button>
                        <button className="hero__video-control-right--volume"><img src={volumeUpIcon} alt="volume up icon" /></button>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default VideoHero
import React from "react";
import "../VideoHero/VideoHero.scss";



function VideoHero({selectedVideoId, videos}) {
    const selectedVideo = videos.find((video) => video.id === selectedVideoId);

    if (!selectedVideo) {
        return <div>Loading...</div>;
    }

    const {image, video} = selectedVideo;
    return (
        <section className="hero">
            <div className="hero__video">
                <video className="hero__video--poster" poster={"http://localhost:8083/videos/" + selectedVideo.image} controls>
                </video>
            </div>
        </section>

   )

    
}
export default VideoHero;
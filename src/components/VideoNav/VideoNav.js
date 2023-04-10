import React from "react";
import VideoNavItem from "../VideoNavItem/VideoNavItem";
import "../VideoNav/VideoNav.scss";

function VideoNav({clickHandler, videos}) {
    return (
        <nav className="nav">
            <h4>NEXT VIDEOS</h4>
            {
                videos.map(video => (
                    <VideoNavItem key={video.id} video={video} clickHandler={clickHandler} />
                ))
            }
        </nav>
    )
}


export default VideoNav;
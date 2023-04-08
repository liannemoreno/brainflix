import React from "react";
import VideoNavItem from "../VideoNavItem/VideoNavItem";
import "../VideoNav/VideoNav.scss";

function VideoNav({ clickHandler, videos }) {
    return (
        <nav className="nav">
            <p>NEXT VIDEOS</p>
            {/* map plant array to nav item: pass in plant object and clickhandler */}
            {
                videos.map(video => (
                    <VideoNavItem key={video.id} video={video} clickHandler={clickHandler} />
                ))
            }
        </nav>
    )
}


export default VideoNav;
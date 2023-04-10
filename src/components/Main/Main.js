import React from "react";
import Comments from "../Comments/Comments";
import Form from "../Form/Form";
import VideoNav from "../VideoNav/VideoNav";
import Description from "../Description/Description";

function Main() {
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
                

            </div>
        </section>
    </section>
}

export default Main; 
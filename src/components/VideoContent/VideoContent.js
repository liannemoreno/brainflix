import React from "react";
import "./VideoContent.scss";
import likesIcon from "../../assets/Images/likes.svg";
import viewsIcon from "../../assets/Images/views.svg";
import Comments from "../Comments/Comments.js"
import Form from "../Form/Form.js"
import axios from "axios";
import { useEffect, useState } from "react";

function VideoContent({ selectedVideoId }) {
    const [video, setVideo] = useState(null);

    useEffect(() => {
        if (selectedVideoId === null) {
            return;
        }
        axios.get(`http://localhost:8083/videos/${selectedVideoId}`)
            .then(response => {
                setVideo(response.data);
            })
    }, [selectedVideoId])

    if (video === null) {
        return <div>Loading!!</div>
    }

    const { title, channel, timestamp, views, likes, description, comments } = video;
    return (
        <>
            <section className="description">
                <h2 className="description__title">
                    <p>{title}</p>
                </h2>
                <div className="description__details">
                    <div className="description__details-left">
                        <p className="description__details-left--channel">
                            By {channel}
                        </p>
                        <p className="description__details-left--date">
                            {new Date(timestamp).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="description__details-right">
                        <p className="description__details-right--likes">
                            <img src={viewsIcon} alt="views icon"></img>
                            {views}
                        </p>
                        <p className="description__details-right--views">
                            <img src={likesIcon} alt="heart icon"></img>
                            {likes}
                        </p>

                    </div>
                </div>
                <div className="description__textbox">
                    <p className="description__textbox--text">
                        {description}
                    </p>
                </div>
            </section>
            <div className="main__form">
                <Form comments={comments} />
            </div>
            <div className="main__comments">
                <Comments comments={comments} />
            </div>
            <div />
        </>
    )
}

export default VideoContent;
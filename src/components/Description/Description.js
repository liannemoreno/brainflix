import React from "react";
import "../Description/Description.scss";
import likesIcon from "../../assets/Images/likes.svg";
import viewsIcon from "../../assets/Images/views.svg";

function Description({ selectedVideo }) {
    const { title, channel, timestamp, views, likes, description } = selectedVideo;
    return (
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
    )
}

export default Description;
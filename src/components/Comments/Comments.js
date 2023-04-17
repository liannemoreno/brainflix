import React from "react";
import "../Comments/Comments.scss"
import grayImage from "../../assets/Images/mercury.png"


function Comments({comments}) {
    return (
        <section className="comments">
           {
             comments.map(comment =>
            <div className="comment" key={comment.id}>
                <div className="comment__img"></div>
                <div className="comment__wrapper">
                    <div className = "comment__title">
                        <p className="comment__title--name">{comment.name}</p>
                        <p className="comment__title--date">{new Date(comment.timestamp).toLocaleDateString()}</p>
                    </div>
                    <p className="comment__text">{comment.comment}</p>
                </div>
            </div>
            )}
        </section>
)}

export default Comments;

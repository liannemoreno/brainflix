import React from "react";
import "../Form/Form.scss";
import profileImage from "../../assets/Images/Mohan-muruge.jpg";
import publishIcon from "../../assets/Images/add_comment.svg"


function Form({ comments }) {
    return (
        <section className="form">
            <h2 className="form__title">{comments.length} Comments</h2>
            <div className="form__wrapper">
                <div className="form__input">
                    <form className="form__main" action="#">
                        <img className="form__main-image" src={profileImage} type="image" name="headerImage" id="headerImage" alt ="profile image of the person commenting"/>
                        <div className="form__main-comment">
                            <label className="form__main-comment-text" htmlFor="comment">JOIN THE CONVERSATION</label>
                            <textarea className="form__main-comment-textarea" type="text" cols="10" name="comment" id="comment" placeholder="Add a new comment"></textarea>
                        </div>
                        <button className="form__main-button1" type="submit">
                            <img className="form__main-button--image1" src={publishIcon} alt="comment icon" />
                            <p>COMMENT</p>
                        </button>
                    </form>
                    <button className="form__main-button" type="submit">
                        <img className="form__main-button--image" src={publishIcon} alt="comment icon" />
                        <p>COMMENT</p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Form;
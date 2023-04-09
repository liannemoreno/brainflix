import React from "react";
import "../Form/Form.scss";
import profileImage from "../../assets/Images/Mohan-muruge.jpg";
import publishIcon from "../../assets/Images/add_comment.svg"


function Form({selectedVideo}) {
    const {comments} = selectedVideo;
    return (
        <section className="form">
            <div className="form__wrapper">
                <h2 className="form__title">{comments.length} Comments</h2>
                <div className="form__input">
                    <image className="form__main--image" src={profileImage} type="image" name="headerImage" id="headerImage" />
                    <form className="form__main" action="#">
                        <label className="form__main-text" htmlFor="comment">JOIN THE CONVERSATION</label>
                        <div className="form__main-comment">
                            <textarea className="form__main--text" type="text" cols="10" name="comment" id="comment" placeholder="Add a new comment"></textarea>
                            <button className="form__main--button" type="submit">
                                <img className="form__main--button--image" src={publishIcon} alt="comment icon" />
                                COMMENT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form;
import React from "react";
import "../UploadVideoForm/UploadVideoForm.scss";
import { Link } from 'react-router-dom';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import publishIcon from '../../assets/Images/publish.svg';

function UploadVideoFrom() {
    return (
        <form className="upload__form">
            <div className="upload__form-image">
                <label className="upload__form-image--title">VIDEO THUMBNAIL</label>
                <img className="upload__form-image--file" src={thumbnail}></img>
            </div>
            <form className="upload__form-wrapper">
                <div className="upload__form-title">
                    <label className="upload__form-title--label">TITLE YOUR VIDEO</label>
                    <input className="upload__form-title--input" type="text" id="videoTitle" name="videoTitle" placeholder="Add a title to your video"  ></input>
                </div>
                <div className="upload__form-description">
                    <label className="upload__form-description--label">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="upload__form-description--input" type="text area" cols="10" id="videoDescription" name="videoDescription" placeholder="Add a description to your video"></textarea>
                </div>
                <div className="upload__form-button">
                    <Link to="/" style={{textDecoration:'none'}}>
                        <button className="upload__form-button-publish" type="submit">
                            <img className="upload__form-button-publish--image" src={publishIcon} alt="comment icon" />
                            <p className="upload__form-button-publish--title">PUBLISH</p>
                        </button>
                    </Link>
                    <div className="upload__form-button-cancel" type="submit">
                        <p>CANCEL</p>
                    </div>
                </div>
            </form>
        </form>
    )
};

export default UploadVideoFrom;
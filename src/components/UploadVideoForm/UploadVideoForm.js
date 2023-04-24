import "../UploadVideoForm/UploadVideoForm.scss";
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import publishIcon from '../../assets/Images/publish.svg';
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';


function UploadVideoForm() {

    const params = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [displayTitle, setDisplayTitle] = useState('');

    const [descript, setDescript] = useState('');
    const [displayDescript, setDisplayDescript] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDecriptChange = (event) => {
        setDescript(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8083/videos/', {
            title: title,
            description: descript,
        })
            .then(response => {
                setTimeout(() => {
                    alert("Upload Successful");
                    navigate('/');
                    setDisplayTitle(response.data.results);
                    setDisplayDescript(response.data.results);
                }, 3000);
            })
            .catch(err => console.log(err));
    };

    return (
        <form className="upload__form">
            <div className="upload__form-image">
                <label className="upload__form-image--title">VIDEO THUMBNAIL</label>
                <img className="upload__form-image--file" src={"http://localhost:8083/videos/"} alt="video thumbnail" />
            </div>
            <div className="upload__form-wrapper">
                <div className="upload__form-title">
                    <label className="upload__form-title--label">TITLE YOUR VIDEO</label>
                    <input
                        className="upload__form-title--input"
                        onChange={handleTitleChange}
                        value={title}
                        type="text"
                        id="videoTitle"
                        name="videoTitle"
                        placeholder="Add a title to your video"
                    />
                </div>
                <div className="upload__form-description">
                    <label className="upload__form-description--label">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="upload__form-description--input"
                        onChange={handleDecriptChange}
                        value={descript}
                        type="text area"
                        cols="10"
                        id="videoDescription"
                        name="videoDescription"
                        placeholder="Add a description to your video">
                    </textarea>
                </div>
                <div className="upload__form-button">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button onClick={handleSubmit} className="upload__form-button-publish" type="submit">
                            <img className="upload__form-button-publish--image" src={publishIcon} alt="publish icon" />
                            <p className="upload__form-button-publish--title">PUBLISH</p>
                        </button>
                    </Link>
                    <div className="upload__form-button-cancel" type="submit">
                        <p>CANCEL</p>
                    </div>
                </div>
            </div>
        </form>
    );

};

export default UploadVideoForm;




























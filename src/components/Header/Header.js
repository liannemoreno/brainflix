import React from "react";
import '../Header/Header.scss';
import { Link } from 'react-router-dom'
import brainflixLogo from "../../assets/Images/BrainFlix-logo.svg";
import searchIcon from "../../assets/Images/search.svg";
import uploadIcon from "../../assets/Images/upload.svg";
import profileImage from "../../assets/Images/Mohan-muruge.jpg";

function Header() {
    return (
        <>
            <header className="header">
                <Link className="header__logo" to="/" style={{ textDecoration: 'none' }}>
                    <img className="header__logo-image" src={brainflixLogo} alt="BrainFlix" />
                </Link>
                <div className="header__main">
                    <form className="header__main-search">
                        <input className="header__main-search-bar" placeholder="Search" type="text" name="searchBar" id="searchBar" size="35" />
                        <img className="header__main-search-image" src={searchIcon} type="image" name="headerImage" id="headerImage" />
                    </form>
                    <img className="header__main-image--active1" src={profileImage} alt="profile" />
                </div>
                <div className="header__button">
                    <Link to="/video-upload" style={{ textDecoration: 'inherit' }}>
                        <button className="header__button-upload">
                            <img className="header__button-upload-image" src={uploadIcon} alt="upload icon" />
                            <p>UPLOAD</p>
                        </button>
                    </Link>
                </div>
                <img className="header__image--active2" src={profileImage} alt="profile" />
            </header>
        </>
    )
}
export default Header;
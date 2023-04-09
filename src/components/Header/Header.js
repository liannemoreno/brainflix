import React from "react";
import brainflixLogo from "../../assets/Images/BrainFlix-logo.svg";
import searchIcon from "../../assets/Images/search.svg";
import uploadIcon from "../../assets/Images/upload.svg";
import profileImage from "../../assets/Images/Mohan-muruge.jpg";

function Header() {
    return (
        <>
            <header className="header">
                <a className="header__logo" href="#">
                    <img className="header__logo-image" src={brainflixLogo} alt="BrainFlix" />
                </a>
                <div className="header__main">
                    <form className="header__main-search">
                        <input className="header__main-search-bar" type="text" name="searchBar" id="searchBar" />
                        <image className="header__main-search-image" src={searchIcon} type="image" name="headerImage" id="headerImage" />
                    </form>
                </div>
                <img className="header__image active1" src={profileImage} alt="profile" />
                <div className="header__button">
                    <button className="header__button-upload">
                        <img className="header__button-upload-image" src={uploadIcon} alt="upload icon"/>
                        UPLOAD
                    </button>
                </div>
                <img className="header__image active2" src={profileImage} alt="profile" />
            </header>
        </>
    )
}
export default Header;
import './HomePage.scss';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoNav from "../../components/VideoNav/VideoNav.js"
import VideoHero from '../../components/VideoHero/VideoHero.js';
import Comments from "../../components/Comments/Comments.js";
import Description from '../../components/Description/Description.js';
import Form from "../../components/Form/Form.js";


function HomePage() {
    const {idFromParams} = useParams();
    const [videos, setVideos] = useState([])

    let defaultVideoId= null;

    if (videos.length > 0){
        defaultVideoId= videos[0].id;
    }

    let videoIdToDisplay = idFromParams || defaultVideoId;

    const filteredVideos = videos.filter(video => video.id !== videoIdToDisplay)

    useEffect(() => {
        axios.get('https://project-2-api.herokuapp.com/videos/?api_key=c98f4ffe-8ba9-4da3-95d5-1e6d91091ddb')
            .then(response => {
                setVideos(response.data);
            })
    }, [])


    return (
        <div className="App">
            <VideoHero selectedVideoId={videoIdToDisplay} videos={videos}/>
            <section className="main">
                {/* <section className="main__main">
                    <div className="main__description">
                        <Description selectedVideoId={videoIdToDisplay} />
                    </div>
                    <div className="main__form">
                        <Form selectedVideoId={videoIdToDisplay} />
                    </div>
                    <div className="main__comments">
                        <Comments selectedVideoId={videoIdToDisplay} />
                    </div>
                </section> */}
                <section className="main__nav">
                    <div className="main__nav-bar">
                        <VideoNav videos={filteredVideos} />
                    </div>
                </section>
            </section>
        </div>
    );
}

export default HomePage;

{/* <VideoNav clickHandler={videoClick} videos={filteredVideos} /> */}
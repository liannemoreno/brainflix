import './HomePage.scss';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoNav from "../../components/VideoNav/VideoNav.js"
import VideoHero from '../../components/VideoHero/VideoHero.js';
import VideoContent from '../../components/VideoContent/VideoContent.js';


function HomePage() {
    const { idFromParams } = useParams();
    const [videos, setVideos] = useState([])

    let defaultVideoId = null;

    if (videos.length > 0) {
        defaultVideoId = videos[0].id;
    }

    let videoIdToDisplay = idFromParams || defaultVideoId;

    const filteredVideos = videos.filter(video => video.id !== videoIdToDisplay)

    useEffect(() => {
        axios.get('http://localhost:8083/videos')
            .then(response => {
                setVideos(response.data);
            })
            .catch(err =>console.log(err));
    }, [])


    return (
        <div className="App">
            <VideoHero selectedVideoId={videoIdToDisplay} videos={videos} />
            <section className="main">
                <section className="main__main">
                    <div className="main__description">
                        <VideoContent selectedVideoId={videoIdToDisplay} />
                    </div>
                </section>
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
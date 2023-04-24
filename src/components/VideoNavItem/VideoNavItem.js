import '../VideoNavItem/VideoNavItem.scss';
import { Link } from 'react-router-dom';

function VideoNavItem({video}) {
    return (
        <section className="nav__item">
            <Link className="nav__item-click" to={`/video/${video.id}`}>
                <img className="nav__item-image" src={"http://localhost:8083/videos/" + video.image} alt="up next video"/>
            </Link>
            <div className="nav__item-details">
                <h3 className="nav__item-details--title">
                {video.title}
                </h3>
                <p className="nav__item-details--channel">
                    {video.channel}
                </p>
            </div>
        </section>
    );
}

export default VideoNavItem;

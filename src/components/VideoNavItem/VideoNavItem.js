import '../VideoNavItem/VideoNavItem.scss';

function VideoNavItem({ clickHandler, video }) {
    return (
        <section className="nav__item">
            <img className="nav__item-image" src={video.image} alt="up next video" onClick={() => clickHandler(video.id)}/>
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

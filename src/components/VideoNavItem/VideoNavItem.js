import '../VideoNavItem/VideoNavItem.scss';

function VideoNavItem({ clickHandler, video }) {
    return (
        <section class="nav__item">
            <img className="nav__item-button" src={video.image} alt="up next video" onClick={() => clickHandler(video.id)}>
            </img>
            <article className="nav__item-details">
                <h3 className="nav__item-details--title">
                {video.title}
                </h3>
                <p className="className=nav__item-details--channel">
                    {video.channel}
                </p>
            </article>
        </section>
    );
}

export default VideoNavItem;

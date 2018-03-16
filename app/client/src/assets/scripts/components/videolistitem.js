import React from 'react';
import propTypes from 'prop-types';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    const videoClicked = (e) => {
        e.preventDefault();

        return onVideoSelect(video);
    };

    return (
        <li className="list-group-item">
            <div className="video-list media row">
                <div className="col-4 thumb-wrap">
                    <a href="#" onClick={ videoClicked }><img src={imageUrl} alt=""/></a>
                </div>
                <div className="col-8">
                    <p><a href="#" onClick={ videoClicked }><strong>{title}</strong></a></p>
                </div>
            </div>
        </li>
    );
};

VideoListItem.propTypes = {
    video: propTypes.object,
    onVideoSelect: propTypes.func
};

export default VideoListItem;

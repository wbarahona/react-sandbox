import React from 'react';
import propTypes from 'prop-types';

const VideoListItem = ({ video }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <li className="list-group-item">
            <div className="video-list media row">
                <div className="col-4 thumb-wrap">
                    <a href=""><img src={imageUrl} alt=""/></a>
                </div>
                <div className="col-8">
                    <p><a href=""><strong>{title}</strong></a></p>
                </div>
            </div>
        </li>
    );
};

VideoListItem.propTypes = {
    video: propTypes.object
};

export default VideoListItem;

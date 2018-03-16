import React from 'react';
import propTypes from 'prop-types';
import VideoListItem from './videolistitem';

const VideoList = ({ videos, onVideoSelect }) => {
    const videoItems = videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={ onVideoSelect }
                key={ video.etag }
                video={ video } />
        );
    });

    return (
        <ul className="col-sm-6 list-group">
            { videoItems }
        </ul>
    );
};

VideoList.propTypes = {
    videos: propTypes.array,
    onVideoSelect: propTypes.func
};

export default VideoList;

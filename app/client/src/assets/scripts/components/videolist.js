import React from 'react';
import propTypes from 'prop-types';
import VideoListItem from './videolistitem';

const VideoList = ({ videos }) => {
    const videoItems = videos.map((video) => <VideoListItem key={video.etag} video={ video } />);

    return (
        <ul className="col-sm-6 list-group">
            {videoItems}
        </ul>
    );
};

VideoList.propTypes = {
    videos: propTypes.array,
};

export default VideoList;

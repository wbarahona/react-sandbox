import React from 'react';
import propTypes from 'prop-types';

const VideoDetail = ({ video }) => {
    if (!video) {
        return(
            <div className="col-sm-6">
                <div className="video-box">
                    <p className="video-loading">Loading... </p>
                </div>
            </div>
        );
    }

    const { videoId } = video.id;
    const url = `https://www.youtube.com/embed/${ videoId }`;

    return(
        <div className="col-sm-6">
            <div className="video-box">
                <iframe src={ url }></iframe>
            </div>
            <div className="video-info">
                <big><strong>{ video.snippet.title }</strong></big>
                <p>{ video.snippet.description }</p>
            </div>
        </div>
    );
};

VideoDetail.propTypes = {
    video: propTypes.object,
};

export default VideoDetail;

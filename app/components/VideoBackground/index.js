import React, { Component } from 'react';
import videoFile from 'video/video_banner.mp4';

class VideoBackground extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="video-container">
        <video autoPlay loop>
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default VideoBackground;

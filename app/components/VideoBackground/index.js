import React, { Component } from 'react';

class VideoBackground extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="video-container">
        <video
          src="//download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          autoPlay
          loop
        />
      </div>
    );
  }
}

export default VideoBackground;

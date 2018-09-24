import React, { Component } from 'react';
import videoFile from 'video/video_banner.mp4';

class VideoBackground extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // this.checkforVideo();
    // this.play(true);
  }

  play(flag) {
    const promise = document.querySelector('video').play();
    if (promise !== undefined) {
      promise.then(() => {
        console.log('video started!');
      }).catch(() => {
        console.log('Autoplay was prevented.');
        if (flag) {
          setTimeout(() => {
            this.play();
          }, 1500);
        }
        // Show a "Play" button so that user can start playback.
      });
    }
  }
  render() {
    return (
      <div className="video-container">
        <video loop playsInline autoPlay muted>
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default VideoBackground;

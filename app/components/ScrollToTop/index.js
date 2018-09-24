import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';

class ScrollToTopWrapper extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ScrollToTop showUnder={160}>
        <span className="scrollToTop">
          <i className="fa fa-arrow-up"></i>
        </span>
      </ScrollToTop>
    );
  }
}

export default ScrollToTopWrapper;

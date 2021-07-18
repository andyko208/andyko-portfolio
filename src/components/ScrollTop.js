import React, { Component } from 'react';

class ScrollTop extends Component {
  constructor(props) {
    super(props);

  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div className="scroll-to-top">
          <div onClick={() => this.scrollToTop()}>
            <button>Move to Top</button>
          </div>
      </div>
    );
  }
}
export default ScrollTop

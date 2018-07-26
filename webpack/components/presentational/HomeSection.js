import React, { Component } from "react";

class HomeSection extends Component {
  render() {
    return (
      <section id="home">
        <div className="overVideo">
          <h1>
            perception<br />equals reality
          </h1>
          <h2>
            <span>-</span> kim norland
          </h2>
        </div>
        <div id="homevideo">
          <div className="video_overlay" />
        </div>
      </section>
    );
  }
}

export default HomeSection;

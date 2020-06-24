import React, { Component } from "react";
import Album from "./Album";
import '../assets/main.css';

class TopView extends Component {
    

  render() {
    return (
      <div
        id="container1"
        className="flex-no-wrap container mx-auto"
      >
        {" "}
        <p className="justify-start text-base text-colorPallete_LightGreen">New Releases</p>
        <div id="container2" className="container overflow-x-auto">
          <div className="flex ml-10 mr-10 group z-0">
            {this.props.releases.map((release) => (
              <Album
                setPlay={this.props.setPlay}
                setPlayURIs={this.props.setPlayURIs}
                release={release}
                key={release.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default TopView;

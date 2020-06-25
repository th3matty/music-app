import React, { Component } from "react";
import Album from "./Album";
import '../assets/main.css';

class TopView extends Component {
    

  render() {
    return (
      <div
        id="container1"
        /* {"-no-wrap "} */
        className="flex container mx-auto"
      >        
        <p className="justify-start text-base text-colorPallete_LightGreen">New Releases</p>
        <div id="container2" className="container overflow-x-auto overflow-y-hidden ">
          <div className="flex ml-1 mr-10">
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

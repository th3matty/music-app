import React, { Component } from "react";
import Album from "./Album";
import "../assets/main.css";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";

class TopView extends Component {
  // in dieser Component wird das Album für den Oberen Bereich im Main.js gerendert()
  render() {
    return (
      <div id="container1">
        <div className="flex container mx-auto">
          <p className="justify-start text-base text-colorPallete_LightGreen">
            New Releases
          </p>

          <div
            id="container2"
            className="container overflow-x-auto overflow-y-hidden "
          >
            <SimpleBar style={{ maxHeight: 1000 , maxWidth:1500}}>
              <div className="flex ml-1 mr-10">
                {this.props.releases.map((release) => (
                  <Album
                    playTrack={this.props.playTrack}
                    release={release}
                    key={release.id}
                  />
                ))}
              </div>
            </SimpleBar>
          </div>
        </div>
      </div>
    );
  }
}

export default TopView;

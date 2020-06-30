import React, { Component } from "react";
import Playlist from "./Playlist";
import "../assets/aside.css";
import HomeIcon from "../assets/img/home.svg";
import "simplebar/dist/simplebar.min.css";
// import SimpleBar from "simplebar-react";
import SearchBar from "./Searchbar";
import Footer from "./Footer";

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate() {
    console.log("aside rendert");
  }

  render() {
    return (
      <div
        id="aside"
        className="w-48 bg-gray_aside font-semibold text-sm text-gray-400 flex flex-col justify-between"
      >
        <div className="py-6">
          <div className="">
            <ul className="right">
              <hr className="mt-3 mb-3"></hr>
              <a href="#!" className="flex items-center mx-5 mt-4">
                <img src={HomeIcon} className="mr-2" alt="HomeIcon" />
                <button id="homeBtn" className=" ml-2">
                  <span className="text-colorPallete_LightGreen text-lg hover:font-bold">
                    Home
                  </span>
                </button>
              </a>
              <SearchBar
                token={this.props.token}
                setAlbumID={this.props.setAlbumID}
                setPlaylistID={this.props.setPlaylistID}
                setReleases={this.props.setReleases}
              />
            </ul>
            <hr className="mt-3 mb-3"></hr>
            {/* <SimpleBar className="area" style={{ maxHeight: 500 }}> */}
              <Playlist
                token={this.props.token}
                setPlaylistID={this.props.setPlaylistID}
                setAlbumID={this.props.setAlbumID}
              />
            {/* </SimpleBar> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Aside;

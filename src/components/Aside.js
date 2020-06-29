import React, { Component } from "react";
import Playlist from "./Playlist";
import "../assets/aside.css";
import HomeIcon from "../assets/img/home.svg";
import "simplebar/dist/simplebar.min.css";
/* import SimpleBar from "simplebar-react"; */
import SearchBar from "./Searchbar";
import Footer from "./Footer";

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="w-48 bg-gray_aside font-semibold text-sm text-gray-400 flex flex-col justify-between"
        id="aside"
      >
        <div className="py-6">
          <div className="">
            <ul className="right">
              <hr className="mt-3 mb-3"></hr>
              <li className="border-l-4 border-colorPallete_Blue">
                <a href="#!" className="flex items-center mx-4 mt-4">
                  <img src={HomeIcon} className="mr-2" alt="HomeIcon" />
                  <button id="homeBtn" className=" ml-2">
                    <span className="text-colorPallete_LightGreen text-lg hover:font-bold">
                      Home
                    </span>
                  </button>
                </a>
              </li>
              <SearchBar token={this.props.token} />
            </ul>
            <hr className="mt-3 mb-3"></hr>
            {/*  <SimpleBar
              className="area"
              style={{ maxHeight: 500, paddingRight: 10, scrollbarMinSize: 0 }}
            > */}
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

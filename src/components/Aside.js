import React, { Component } from "react";
import "../assets/aside.css";
import HomeIcon from "../assets/img/home.svg";
import SearchIcon from "../assets/img/search.svg";

class Aside extends Component {
  state = {
    playlists: [],
  };

  getPlaylists() {
    fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${this.props.token}`,
      },
    })
      .then((res) => res.json())
      .then((playlists) => {
        console.log(playlists.items);
        this.setState({ playlists: playlists.items });
      });
  }

  componentDidMount() {
    this.getPlaylists();
  }

  render() {
    return (
      <div className="">
        <ul className="right">
          <hr className="mt-3 mb-3"></hr>
          <li className="border-l-4 border-colorPallete_Blue">
            <a href="#!" className="flex items-center mx-4 mt-4">
              <img src={HomeIcon} className="mr-2" alt="HomeIcon" />
              <button id="homeBtn" className=" ml-2">
                <span className="text-colorPallete_LightGreen text-lg">Home</span>
              </button>
            </a>
          </li>
          <li className="border-l-4 border-colorPallete_Blue">
            <a href="#!" className="flex items-center mx-4 mt-4">
              <img src={SearchIcon} className="mr-3" alt="SearchIcon" />
              <input
                id="inputSearch"
                className=" ml-3 hover:bg-colorPallete_LightGreen focus:outline-1 focus:shadow-outline border border-colorPallete_Blue rounded-lg py-2 px-10 block w-full appearance-none leading-normal text-colorPallete_Blue text-lg text-center "
              ></input>
            </a>
          </li>
        </ul>
        <hr className="mt-3 mb-3"></hr>
        <p className="text-colorPallete_MintGreen mb-3 mt-5 text-lg ml-2">Your Playlists</p>
        <div className="">
          {this.state.playlists &&
            this.state.playlists.map((playlist) => (
              <p key={playlist.id} className="text-sm ml-2">{playlist.name}</p>
            ))}
        </div>
      </div>
    );
  }
}

export default Aside;

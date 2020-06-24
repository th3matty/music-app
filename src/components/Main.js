import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback"; // https://github.com/gilbarbara/react-spotify-web-playback
import Aside from "./Aside.js";
import UserProfileIcon from "../assets/img/userProfile.svg";
import TopView from "./TopMainView.js";
import LyricsBox from "./lyricsBox/lyricsBox";


function Main({ token }) {
  const [releases, setReleases] = useState([]);
  const [playURIs, setPlayURIs] = useState([]);
  const [play, setPlay] = useState(null);
  const [songTitle, setTitle] = useState("");
  const [songArtist, setArtist] = useState("");
  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/new-releases", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.albums.items);
        setReleases(res.albums.items);
      });
  }, [token]);

  return (
    <div className="flex flex-col h-screen text-sm text-gray-400">
      <div className="flex-1 flex overflow-y-hidden">
        <div className="sidebar w-48 flex-none flex flex-col bg-gray_aside justify-between font-semibold">
          <div className="py-6 overflow-y-auto ">
            here comes our Logo, import it here "main.js"
            <Aside token={token} />
          </div>
        </div>
        <div className="content-area flex-1  bg-colorPallete_Blue h-screen flex flex-col">
          <div className="top-bar flex px-4 py-2 justify-end bg-gray_aside">
            <a href="!#" className=" mt-2">
              <img src={UserProfileIcon} className="" alt="UserProfileIcon" />
            </a>
          </div>
          <div className="TopView">
            {/* ContentAREA //<-- TOPVIEW-->//*/}
            <TopView
              setPlay={setPlay}
              setPlayURIs={setPlayURIs}
              releases={releases}
            />
          </div>
        </div>

        <div className=" w-56 bg-gray-600">
          <LyricsBox token={token} title={songTitle} artist={songArtist} />
        </div>
      </div>
      <div>
        <div className="">
          <SpotifyPlayer
            token={token}
            uris={playURIs}
            play={play}
            callback={(data) => {
              setTitle(data.track.name);
              setArtist(data.track.artists);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;

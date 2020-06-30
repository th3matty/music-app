import React, { useState, useEffect } from "react";
import Aside from "./Aside.js";
import Header from "./Header";
import LyricsBox from "./lyricsBox/lyricsBox";
import MiddleFrame from "./MiddleFrame.js";

function Main({ token }) {
  const [songTitle, setTitle] = useState("");
  const [songArtist, setArtist] = useState("");
  const [playlistID, setPlaylistID] = useState("");
  const [albumID, setAlbumID] = useState("");
  const [releases, setReleases] = useState([]);

  // Have a look when it renders!!
  useEffect(() => {
    console.log("main rendert");
  });

  return (
    <div className="h-full">
      <Header token={token} />
      <div className="flex h-9/10">
      <Aside
        token={token}
        setPlaylistID={setPlaylistID}
        setAlbumID={setAlbumID}
        setReleases={setReleases}
      />
      <MiddleFrame
        token={token}
        setTitle={setTitle}
        setArtist={setArtist}
        playlistID={playlistID}
        setPlaylistID={setPlaylistID}
        setAlbumID={setAlbumID}
        albumID={albumID}
        releases={releases}
        setReleases={setReleases}
      />
      <LyricsBox token={token} title={songTitle} artist={songArtist} />
      </div>
    </div>
  );
}

export default Main;

import React, { useState } from "react";
import Aside from "./Aside.js";
import Header from "./Header";
import LyricsBox from "./lyricsBox/lyricsBox";
import MiddleFrame from "./MiddleFrame.js";

function Main({ token }) {
  const [songTitle, setTitle] = useState("");
  const [songArtist, setArtist] = useState("");

  return (
    <div className="text-sm text-gray-400 flex flex-wrap">
      <Header token={token} />
      <Aside token={token} />

      <MiddleFrame token={token} setTitle={setTitle} setArtist={setArtist} />
      <LyricsBox token={token} title={songTitle} artist={songArtist} />
    </div>
  );
}

export default Main;

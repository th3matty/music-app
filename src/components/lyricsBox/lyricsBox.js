import React from "react";
import "./LyricsBox.css";
import { getLyrics } from "genius-lyrics-api";

const options = {
  apiKey: "itSxkOuCcQpA-yYJReJH5eV8396iOUF1xN5FQGBHiOkqrgp-TgklLUvSIcyZLTB_",
  title: "Blinding Lights",
  artist: "The Weeknd",
  optimizeQuery: true,
};

class LyricsBox extends React.Component {
  options = {
    apiKey: "1gO4r5K5znxDe6UtvyeuIPRynr66reF0FG9jStTmGwRZ1AYbpxNEH8f-tFjuDaeZ",
    title: "Blinding Lights",
    artist: "The Weeknd",
    optimizeQuery: true,
  };

  /* getSong(options).then((song) =>{
  console.log(`
${song.id}
${song.url}
${song.albumArt}
${song.lyrics}`)
}); */

  handelLyrics() {
    getLyrics(options).then((lyrics) => console.log(lyrics));
  }

  render() {
    return (
      <div className="lyricsBox">
        <h1 className="lyricsTitle">lyricsBox</h1>
        <p className="lyrics">text</p>
      </div>
    );
  }
}

export default LyricsBox;

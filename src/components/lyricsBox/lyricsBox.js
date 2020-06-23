import React from "react";
import "./LyricsBox.css";

class LyricsBox extends React.Component {
  token = "778e2dfdfda95a7a548f4ca007ad7898";
  componentDidMount() {
    fetch(
      `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433&apikey=${this.token}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <div className="lyricsBox">
        <h1 className="lyricsTitle" onClick={this.handelLyrics}>
          lyricsBox
        </h1>
        <p className="lyrics">text</p>
      </div>
    );
  }
}

export default LyricsBox;

import React from "react";
import "./LyricsBox.css";

class LyricsBox extends React.Component {
  state = {
    accessToken: "778e2dfdfda95a7a548f4ca007ad7898",
  };

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433&apikey=${this.state.accessToken}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message.body.lyrics.lyrics_body);
      });
  }
  getSongId() {
    fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        Authorization: `Bearer ${this.props.token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  render() {
    return (
      <div className="lyricsBox">
        <h1 className="lyricsTitle" onClick={this.getSongId}>
          lyricsBox
        </h1>
        <p className="lyrics">text</p>
      </div>
    );
  }
}

export default LyricsBox;

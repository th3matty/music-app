import React from "react";
import "./LyricsBox.css";

class LyricsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: "778e2dfdfda95a7a548f4ca007ad7898",
      songTitle: this.props.title,
      artist: this.props.artist,
      lyrics: "",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.title !== this.props.title) {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.track.get?q_artist=${this.props.artist}&q_track=${this.props.title}&apikey=${this.state.accessToken}`
      )
        .then((res) => res.json())
        .then((res) => {
          fetch(
            `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${res.message.body.track.track_id}&apikey=${this.state.accessToken}`
          )
            .then((res) => res.json())
            .then((res) => {
              this.setState({ lyrics: res.message.body.lyrics.lyrics_body });
            });
        });
    }
  }

  render() {
    return (
      <div className="lyricsBox">
        <h1 className="lyricsTitle" onClick={this.UpdateState}>
          {this.props.title}
        </h1>
        <p className="lyrics">{this.state.lyrics}</p>
      </div>
    );
  }
}

export default LyricsBox;

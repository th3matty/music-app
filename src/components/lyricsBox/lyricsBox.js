import React from "react";
import "./LyricsBox.css";

class LyricsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: "778e2dfdfda95a7a548f4ca007ad7898",
      songTitle: this.props.title, // used only to get the lyrics
      artist: this.props.artist, // used only to get the lyrics
      lyrics: "",
      album: "",
      trackName: "",
      artistName: "",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.title !== this.props.title) {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.track.get?q_artist=${this.props.artist}&q_track=${this.props.title}&apikey=${this.state.accessToken}`
      )
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            artistName: res.message.body.track.artist_name,
            trackName: res.message.body.track.track_name,
            album: res.message.body.track.album_name,
          });
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
      <div>
        <h1 className="lyricsTitle" onClick={this.UpdateState}>
          {this.state.trackName}
        </h1>
        <h3> {this.state.album}</h3>
        <p>Album from {this.state.artistName} </p>
        <p className="lyrics">{this.state.lyrics}</p>
      </div>
    );
  }
}

export default LyricsBox;

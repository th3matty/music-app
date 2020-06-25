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
          if (
            res.message.body.track.instrumental === 1 &&
            res.message.body.track.has_lyrics === 0
          ) {
            this.setState({
              lyrics: "This song is instrumental, enjoy the music !!! ",
            });
          }
          if (
            res.message.body.track.instrumental === 0 &&
            res.message.body.track.has_lyrics === 0
          ) {
            this.setState({
              lyrics: "We don't have the lyrics for this song yet :(",
            });
          } else if (res.message.body.track.has_lyrics === 1) {
            fetch(
              `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${res.message.body.track.track_id}&apikey=${this.state.accessToken}`
            )
              .then((res) => res.json())
              .then((res) => {
                this.setState({ lyrics: res.message.body.lyrics.lyrics_body });
              });
          }
        });
    }
  }

  render() {
    return (
      <div className="w-56 bg-colorPallete_LightGreen">
        <h1
          className="lyricsTitle font-extrabold text-colorPallete_Blue text-lg"
          onClick={this.UpdateState}
        >
          {this.state.trackName}
        </h1>
        {/* <h3 className="font-bold"> {this.state.album}</h3> */}
        <p className="italic text-gray_aside">Album from... </p>
        <p className="font-bold text-base text-colorPallete_Blue mb-5">
          {this.state.artistName}
        </p>
        <hr></hr>
        <p className="lyrics text-base text-colorPallete_Blue mt-5 leading-loose">
          {this.state.lyrics}
        </p>
      </div>
    );
  }
}

export default LyricsBox;

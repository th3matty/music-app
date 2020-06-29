import React from "react";
import "./LyricsBox.css";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
// import Header from '../Header'

class LyricsBox extends React.Component {
  // In dieser Component rufen wir die Lyrics ab!
  // Positonierung rechts am Bildschirm

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
        })
        .catch((err) => console.log("Oh no lyrics error", err));
    }
  }

  render() {
    return (
      <div className=" w-56 max-w-sm shadow-lg bg-gray_aside  overflow-x-hidden">
        {/* // Bitte untere Zeile noch nicht löschen // */}
        {/* <Header token={this.props.token}/> */}
        <div className="px-6 py-4">
          <p className="italic text-gray_aside mt-20">
            <hr></hr>
            Album...
            <span className="font-extrabold text-colorPallete_Blue text-lg ">
              {this.state.album}
            </span>{" "}
            from...{" "}
          </p>
          <p className="font-bold text-base text-colorPallete_Blue mb-5">
            {this.state.artistName}
          </p>
          <h3>Track:</h3>{" "}
          <span className="font-bold text-colorPallete_Blue text-lg">
            {this.state.trackName}
          </span>
          <hr className="mt-2"></hr>
          <SimpleBar style={{ maxHeight: 400 }}>
            <p className="text-base text-colorPallete_LightGreen text-align-justify mt-5 overflow-auto tracking-wider">
              {this.state.lyrics}
            </p>
          </SimpleBar>
        </div>
      </div>
    );
  }
}

export default LyricsBox;

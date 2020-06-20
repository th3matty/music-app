import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback'; // https://github.com/gilbarbara/react-spotify-web-playback

function Main({ token }) {
	return (
		<div>
			<h1>Spotify Player</h1>
			<SpotifyPlayer token={token} uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']} />
		</div>
	);
}

export default Main;

import React, { useEffect, useState } from 'react';

function PlaylistView({ token, playlistID, playTrack }) {
	const [playlist, setPlaylist] = useState({});

	useEffect(() => {
		if (playlistID) {
			fetch(`https://api.spotify.com/v1/playlists/${playlistID}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then(res => res.json())
				.then(playlist => {
					console.log(playlist);
					setPlaylist(playlist);
				});
		}
	}, [playlistID]);

	return (
		<div>
			<h3 onClick={() => playTrack(playlist.uri)}>{playlist.name}</h3>
		</div>
	);
}

export default PlaylistView;

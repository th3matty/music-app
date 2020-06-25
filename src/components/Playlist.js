import React, { useEffect, useState } from 'react';

function Playlist({ token, setPlaylistID }) {
	const [playlists, setPlaylists] = useState([]);

	useEffect(() => {
		function getPlaylists() {
			fetch('https://api.spotify.com/v1/me/playlists', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then(res => res.json())
				.then(playlists => {
					setPlaylists(playlists.items);
				});
		}
		getPlaylists();
	}, [token]);

	return (
		<div>
			<p className="text-colorPallete_MintGreen mb-3 mt-5 text-lg ml-2">Your Playlists</p>
			<div className="">
				{playlists.map(playlist => (
					<p key={playlist.id} className="text-sm ml-2" onClick={() => setPlaylistID(playlist.id)}>
						{playlist.name}
					</p>
				))}
			</div>
		</div>
	);
}

export default Playlist;

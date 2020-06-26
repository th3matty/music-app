import React, { useEffect, useState } from 'react';

function Playlist({ token, setPlaylistID, setAlbumID }) {
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
			<div className="sticky top-0">
				<p className="text-colorPallete_MintGreen mb-3 mt-5 text-lg ml-2">Your Playlists</p>
			</div>
			<div className="bg-colorPallete_LightGreen text-colorPallete_Blue text-base text-align-justify mt-5 overflow-auto tracking-wider rounded-md">
				{playlists.map(playlist => (
					<p
						key={playlist.id}
						className="text-sm ml-2"
						onClick={() => {
							setPlaylistID(playlist.id);
							setAlbumID('');
						}}
					>
						{playlist.name}
					</p>
				))}
			</div>
		</div>
	);
}

export default Playlist;

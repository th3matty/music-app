import React, { useEffect, useState } from 'react';

function PlaylistView({ token, playlistID, playTrack }) {
	const [playlist, setPlaylist] = useState(null);
	const [trackCover, setTrackCover] = useState(null);

	useEffect(() => {
		if (playlistID) {
			fetch(`https://api.spotify.com/v1/playlists/${playlistID}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then(res => res.json())
				.then(playlist => {
					console.log('playlist: ', playlist);
					setPlaylist(playlist);
					setTrackCover(playlist.images[0].url);
				});
		}
	}, [playlistID]);

	return (
		<div className="p-4 flex flex-wrap">
			<h3 className="text-lg w-full mb-4" onClick={() => playTrack(playlist.uri)}>
				{playlist && playlist.name}
			</h3>
			<div className="w-1/2">
				<img className="w-32 h-32" src={trackCover} />
			</div>
			<div className="w-1/2 pr-4">
				{playlist &&
					playlist.tracks.items.map((item, index) => {
						return (
							<p className="flex justify-between" key={item.track.id}>
								<span>
									{index + 1}. {item.track.name}
								</span>
								<span>{item.track.artists[0].name}</span>
							</p>
						);
					})}
			</div>
		</div>
	);
}

export default PlaylistView;

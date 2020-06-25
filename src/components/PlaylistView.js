import React, { useEffect, useState } from 'react';

function PlaylistView({ token, playlistID, playTrack, setOffset }) {
	const [playlist, setPlaylist] = useState(null);
	const [trackCover, setTrackCover] = useState(null);

	useEffect(() => {
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
	}, [playlistID, token]);

	return (
		<div className="p-4 flex flex-wrap justify-around">
			<h3 className="text-lg w-full mb-4">{playlist && playlist.name}</h3>
			<div className="">
				<img className="w-32 h-32" src={trackCover} alt="playlist album art" />
			</div>
			<div className="pr-4 w-1/2">
				{playlist &&
					playlist.tracks.items.map((item, index) => {
						return (
							<p
								className="flex justify-between"
								key={item.track.id}
								onClick={() => {
									setOffset(index);
									playTrack(playlist.uri);
								}}
							>
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

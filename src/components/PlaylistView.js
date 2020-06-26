import React, { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

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
		<div className="flex flex-wrap justify-around mt-4">
			<h3 className="w-full text-xl mb-4 text-colorPallete_LightGreen">
				{playlist && playlist.name}
			</h3>
			<div>
				<img className="w-48 h-48" src={trackCover} alt="playlist album art" />
			</div>

			<SimpleBar style={{ maxHeight: 250, width: '60%', paddingRight: 10 }}>
				<div>
					{playlist &&
						playlist.tracks.items.map((item, index) => {
							return (
								<p
									className="flex justify-between cursor-pointer hover:border rounded"
									key={item.track.id}
									onClick={() => {
										setOffset(index);
										playTrack(playlist.uri);
										setTrackCover(item.track.album.images[1].url);
									}}
								>
									<span>
										{index + 1}. {item.track.name}
									</span>
									<span className="text-green-100">{item.track.artists[0].name}</span>
								</p>
							);
						})}
				</div>
			</SimpleBar>
		</div>
	);
}

export default PlaylistView;

import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback'; // https://github.com/gilbarbara/react-spotify-web-playback

function Main({ token }) {
	const [releases, setReleases] = useState([]);
	const [playURIs, setPlayURIs] = useState([]);

	useEffect(() => {
		fetch('https://api.spotify.com/v1/browse/new-releases', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then(res => res.json())
			.then(res => {
				console.log(res.albums.items);
				setReleases(res.albums.items);
			});
	}, [token]);

	return (
		<div>
			<h2>New Releases</h2>
			<div>
				{releases.map(release => (
					<div>
						<h3
							onClick={() => {
								console.log(release.uri);
								setPlayURIs(release.uri);
							}}
						>
							{release.name}
						</h3>
						<p>{release.artists[0].name}</p>
					</div>
				))}
			</div>
			<SpotifyPlayer token={token} uris={playURIs} />
		</div>
	);
}

export default Main;

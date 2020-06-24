import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback'; // https://github.com/gilbarbara/react-spotify-web-playback
import Aside from './Aside.js';
import Album from './Album';
import LyricsBox from './lyricsBox/lyricsBox';

function Main({ token }) {
	const [releases, setReleases] = useState([]);
	const [playURIs, setPlayURIs] = useState([]);
	const [play, setPlay] = useState(null);
	const [songTitle, setTitle] = useState('');
	const [songArtist, setArtist] = useState('');

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
		<div className="text-sm text-gray-400 flex flex-wrap">
			<Aside token={token} />

			<div className="flex-1 content-area overflow-y-auto bg-gray_content h-screen">
				This is the content area
				<h2>New Releases</h2>
				<div className="flex flex-wrap">
					{releases.map(release => (
						<Album setPlay={setPlay} setPlayURIs={setPlayURIs} release={release} />
					))}
				</div>
			</div>

			<LyricsBox token={token} title={songTitle} artist={songArtist} />

			<div className="w-full fixed bottom-0">
				<SpotifyPlayer
					token={token}
					uris={playURIs}
					play={play}
					callback={data => {
						setTitle(data.track.name);
						setArtist(data.track.artists);
					}}
				/>
			</div>
		</div>
	);
}

export default Main;

import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback'; // https://github.com/gilbarbara/react-spotify-web-playback
import Aside from './Aside.js';
import Header from './Header';
import TopView from './TopMainView.js';
import LyricsBox from './lyricsBox/lyricsBox';
import MiddleFrame from './MiddleFrame.js';

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
			<Header token={token} />
			<Aside token={token} />

			<MiddleFrame token={token} setTitle={setTitle} setArtist={setArtist} />
			<LyricsBox token={token} title={songTitle} artist={songArtist} />
		</div>
	);
}

export default Main;

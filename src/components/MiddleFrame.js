import React, { useState, useEffect } from 'react';
import TopView from './TopMainView.js';
import Header from  './Header.js'
import SpotifyPlayer from 'react-spotify-web-playback'; // https://github.com/gilbarbara/react-spotify-web-playback

function MiddleFrame({ token, setTitle, setArtist }) {
	const [releases, setReleases] = useState([]);
	const [playURIs, setPlayURIs] = useState([]);
	const [play, setPlay] = useState(null);

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
		<div className="flex-1 content-area overflow-y-auto bg-colorPallete_Blue h-screen relative">
			{/* <Header /> */}
			{/* ContentAREA //<-- TOPVIEW-->//*/}
			<div>
				<TopView setPlay={setPlay} setPlayURIs={setPlayURIs} releases={releases} />
				{/* <TopView setPlay={setPlay} setPlayURIs={setPlayURIs} releases={releases} /> */}
			</div>
			<div className="absolute bottom-0 inset-x-0">
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

export default MiddleFrame;

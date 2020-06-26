import React, { useState } from 'react';
import Aside from './Aside.js';
import Header from './Header';
import LyricsBox from './lyricsBox/lyricsBox';
import MiddleFrame from './MiddleFrame.js';
import Footer from './Footer.js';

function Main({ token }) {
	const [songTitle, setTitle] = useState('');
	const [songArtist, setArtist] = useState('');
	const [playlistID, setPlaylistID] = useState('');
	const [albumID, setAlbumID] = useState('');

	return (
		<div className="flex flex-wrap">
			<Header token={token} />
			<Aside token={token} setPlaylistID={setPlaylistID} setAlbumID={setAlbumID} />
			<MiddleFrame
				token={token}
				setTitle={setTitle}
				setArtist={setArtist}
				playlistID={playlistID}
				setPlaylistID={setPlaylistID}
				setAlbumID={setAlbumID}
				albumID={albumID}
			/>
			<LyricsBox token={token} title={songTitle} artist={songArtist} />
			<Footer />
		</div>
	);
}

export default Main;

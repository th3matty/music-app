import React, { useState } from 'react';
import Aside from './Aside.js';
import Header from './Header';
import LyricsBox from './lyricsBox/lyricsBox';
import MiddleFrame from './MiddleFrame.js';

function Main({ token }) {
	const [songTitle, setTitle] = useState('');
	const [songArtist, setArtist] = useState('');
	const [playlistID, setPlaylistID] = useState('');

	return (
		<div className="flex flex-wrap">
			<Header token={token} />
			<Aside token={token} setPlaylistID={setPlaylistID} />
			<MiddleFrame
				token={token}
				setTitle={setTitle}
				setArtist={setArtist}
				playlistID={playlistID}
			/>
			<LyricsBox token={token} title={songTitle} artist={songArtist} />
		</div>
	);
}

export default Main;

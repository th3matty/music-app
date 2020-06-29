import React, { useState , useEffect } from 'react';
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
	const [searchTest, setSearchTest] = useState(null)
	const [releases, setReleases] = useState([]);

	const search = (e)  =>{
		console.log('aus Searchbar in Main angekommen:', e)
		setSearchTest(e)
		console.log(searchTest);
		//setReleases(e)


	}
	// Have a look when it renders!!
	useEffect(() => {
		console.log("main rendert")
	})

	return (
		<div className="flex flex-wrap">			
			<Header token={token} />
			<Aside token={token} setPlaylistID={setPlaylistID} setAlbumID={setAlbumID} search={search} setReleases={setReleases} />			
			<MiddleFrame
				token={token}
				setTitle={setTitle}
				setArtist={setArtist}
				playlistID={playlistID}
				setPlaylistID={setPlaylistID}
				setAlbumID={setAlbumID}
				albumID={albumID}
				search={search}
				releases={releases}
				setReleases={setReleases}
			/>
			<LyricsBox token={token} title={songTitle} artist={songArtist} />
			<Footer />

		</div>
	);
}

export default Main;

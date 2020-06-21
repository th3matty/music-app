import React, { useState, useEffect } from 'react';
import './App.css';
import Start from './components/Start';
import Main from './components/Main';

function App() {
	const [token, setToken] = useState('');

	const clientID = '21cf846e711745e2a1ea43deb65aaf60'; //
	const redirectURI = 'http://localhost:3000/';

	useEffect(() => {
		const url = window.location.href;
		const accessTokenMatch = url.match(/access_token=([^&]*)/);
		const expiresInMatch = url.match(/expires_in=([^&]*)/);
		if (accessTokenMatch && expiresInMatch) {
			setToken(accessTokenMatch[1]);
			let expiresIn = expiresInMatch[1];
			window.setTimeout(() => setToken(''), expiresIn * 1000);
		}
	}, []);

	function getAccessToken() {
		let scopes =
			'streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state';
		window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=${encodeURIComponent(
			scopes
		)}&redirect_uri=${redirectURI}`;
	}

	return <>{token ? <Main token={token} /> : <Start getToken={getAccessToken} />}</>;
}

export default App;

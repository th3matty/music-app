import React, { useState, useEffect } from 'react';
import './App.css';
import Start from './components/Start';
import Main from './components/Main';

function App() {
	const [accessToken, setAccessToken] = useState('');

	let refreshToken;
	let expiresIn;

	const clientID = '21cf846e711745e2a1ea43deb65aaf60';
	const clientSecret = '3ae5854353a24b8781d5bafb196da554';
	const redirectURI = 'http://localhost:3000/';

	useEffect(() => {
		const url = window.location.href;
		const code = url.match(/code=([^&]*)/);

		if (!code) {
			getAccessToken();
		}
		fetchToken(code);
	}, []);

	function getAccessToken(token) {
		let scopes = encodeURIComponent(
			'streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state'
		);
		window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&scope=${scopes}&redirect_uri=${redirectURI}`;
	}

	function fetchToken(code) {
		const postBody = {
			grant_type: 'authorization_code',
			code: code[1],
			redirect_uri: redirectURI,
			client_id: clientID,
			client_secret: clientSecret,
		};

		let formBody = [];
		for (let property in postBody) {
			let encodedKey = encodeURIComponent(property);
			let encodedValue = encodeURIComponent(postBody[property]);
			formBody.push(encodedKey + '=' + encodedValue);
		}
		formBody = formBody.join('&');

		fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formBody,
		})
			.then(res => res.json())
			.then(json => {
				setAccessToken(json.access_token);
				refreshToken = json.refresh_token;
				expiresIn = json.expires_in;
			});
	}

	return <>{accessToken ? <Main token={accessToken} /> : <Start getToken={getAccessToken} />}</>;
}

export default App;

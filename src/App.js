import React, { useState } from 'react';
import './App.css';
import Start from './components/Start';

function App() {
	const [token, setToken] = useState(null);

	const clientId = '46456as4f535sd4f5s4'; // dummy
	const redirectUri = 'https://localhost:3000';

	async function getToken() {
		const code = await fetch(
			`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=user-read-private%20user-read-email&state=34fFs29kd09`
		);
	}

	return (
		<>
			<Start getToken={getToken} />
		</>
	);
}

export default App;

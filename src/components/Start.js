import React from 'react';

function Start({ getToken }) {
	return (
		<div className='start'>
			<h1>Spotify Music App</h1>
			<div>
				<button onClick={getToken}>Login Spotify</button>
			</div>
		</div>
	);
}

export default Start;

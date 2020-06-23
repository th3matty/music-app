import React from 'react';

function Album({ release, setPlay, setPlayURIs }) {
	return (
		<div>
			<img
				src={release.images[2].url}
				width='64px'
				height='64px'
				onClick={() => {
					console.log(release.uri);
					setPlayURIs(release.uri);
					setPlay(true);
				}}
			/>

			<p>{release.artists[0].name}</p>
		</div>
	);
}

export default Album;

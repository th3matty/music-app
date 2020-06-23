import React from 'react';
import waait from 'waait'; // https://www.npmjs.com/package/waait

function Album({ release, setPlay, setPlayURIs }) {
	return (
		<div
			className="m-2"
			onClick={async () => {
				setPlay(false);
				await waait(100);
				setPlayURIs(release.uri);
				setPlay(true);
			}}
		>
			<div className="flex flex-col bg-white shadow-lg overflow-hidden">
				<img src={release.images[1].url} alt={release.name} className="w-32 h-32" />

				<div className="px-4 py-4">
					<p className="font-bold text-gray-700 text-sm">
						{release.name.length > 8 ? release.name.substring(0, 8) + '...' : release.name}
					</p>
					<p className="text-sm text-gray-600 mt-1">
						{release.artists[0].name.length > 8
							? release.artists[0].name.substring(0, 8) + '...'
							: release.artists[0].name}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Album;

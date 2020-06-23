import React from 'react';
import waait from 'waait'; // https://www.npmjs.com/package/waait

function Album({ release, setPlay, setPlayURIs }) {
	return (
		<div
			className='h-screen flex justify-center items-center'
			onClick={async () => {
				setPlay(false);
				await waait(100);
				setPlayURIs(release.uri);
				setPlay(true);
			}}
		>
			<div className='flex flex-col bg-white shadow-lg overflow-hidden'>
				<img src={release.images[1].url} alt={release.name} className='w-64 h-64' />

				<div className='px-6 py-4'>
					<p className='font-bold text-gray-700'>
						{release.name.length > 25 ? release.name.substring(0, 25) + '...' : release.name}
					</p>
					<p className='text-sm text-gray-600 mt-1'>{release.artists[0].name}</p>
				</div>
			</div>
		</div>
	);
}

export default Album;

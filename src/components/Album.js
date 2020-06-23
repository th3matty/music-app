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
				<img src={release.images[2].url} alt='' className='w-64 h-64 mx-auto' />
				<div className='px-6 py-4'>
					<div className='flex items-center pt-3'>
						<div className='ml-4'>
							<p className='font-bold'>{release.name}</p>
							<p className='text-sm text-gray-700 mt-1'>{release.artists[0].name}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Album;

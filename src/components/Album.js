import React from 'react';
import waait from 'waait'; // https://www.npmjs.com/package/waait
import '../assets/main.css';
import '../assets/album.css';

function Album({ release, setPlay, setPlayURIs }) {
	return (
		<div
			className="flip-card m-2 group card card-body flipcard"
			onClick={async () => {
				setPlay(false);
				await waait(100);
				setPlayURIs(release.uri);
				setPlay(true);
			}}
		>
			<div className="inner max-w-sm w-full lg:max-w-full lg:flex">
				<div className="front h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t-lg lg:rounded-t-lg lg:rounded-l text-center overflow-hidden ">
					<img src={release.images[1].url} alt={release.name} className="w-full" />
				</div>
				{/* border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 */}
				<div className="back border-r border-b border-l      bg-white rounded-b-lg lg:rounded-b-lg lg:rounded-r p-4    rounded-t-lg lg:rounded-t-lg lg:rounded-l   flex flex-col justify-between leading-normal">
					<div className="px-6 py-4">
						<p className="text-xl font-bold text-colorPallete_MintGreen mt-1">
							{release.artists[0].name.length > 20
								? release.artists[0].name.substring(0, 20) + '...'
								: release.artists[0].name}
						</p>
						<p className="text-lg text-colorPallete_Blue mt-5 text-Emoji"> OMG xD </p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Album;

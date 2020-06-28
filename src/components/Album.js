import React , {useEffect}from 'react';
import '../assets/main.css';
import '../assets/album.css';

function Album({ release, playTrack, setAlbumID, setPlaylistID }) {

	useEffect(() => {
		console.log("Album rendert")
	})


	return (
		<div
			className="flip-card m-2"
			onClick={() => {
				playTrack(release.uri);
				setAlbumID(release.id);
				setPlaylistID('');
			}}
		>
			<div className="inner flex">
				<div className="front h-48 w-48 bg-cover rounded-t-lg text-center overflow-hidden">
					<img src={release.images[1].url} alt={release.name} />
				</div>
				{/* border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 */}
				<div className="back bg-white rounded-t-lg px-6 flex flex-col justify-center">
					<p className="text-base font-bold text-colorPallete_MintGreen">
						{release.artists[0].name.length > 20
							? release.artists[0].name.substring(0, 20) + '...'
							: release.artists[0].name}
					</p>
					<p className="text-base text-colorPallete_Blue mt-5">{release.name}</p>
				</div>
			</div>
		</div>
	);
}

export default Album;

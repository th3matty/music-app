import React, { useState, useEffect } from 'react';
import UserProfileIcon from '../assets/img/userProfile.svg';
import waait from 'waait';

function Header({ token }) {
	const [userProfile, setUserProfile] = useState({});
	const [userPic, setUserPic] = useState(UserProfileIcon);

	useEffect(() => {
		async function getProfile() {
			const response = await fetch('https://api.spotify.com/v1/me', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const profile = await response.json();
			console.log('profile', profile);
			setUserProfile(profile);
			await waait(100);

			if (profile.images.length) {
				setUserPic(profile.images[0].url);
			}
		}
		getProfile();
	}, [token]);

	// userProfile.images.length !== 0 ? userProfile.images[0].url : UserProfileIcon;

	// console.log('userProfile:',userProfile)
	return (
		<div className="w-full">
			<div className="top-bar flex items-center justify-end bg-gray_aside overflow-hidden">
				<span>{userProfile.display_name}</span>
				<a href="!#" className=" mt-2 ml-2">
					<img src={userPic} className="w-10 h-10 rounded-full" alt="UserProfileIcon" />
				</a>
			</div>
		</div>
	);
}

export default Header;

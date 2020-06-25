import React, { useState, useEffect } from 'react';
import UserProfileIcon from '../assets/img/userProfile.svg';

function Header({ token }) {
	const [userProfile, setUserProfile] = useState({});

	useEffect(() => {
		fetch('https://api.spotify.com/v1/me', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then(res => res.json())
			.then(profile => setUserProfile(profile));
	}, []);

	return (
		<div className="w-full top-bar flex px-4 py-2 justify-end bg-gray_aside">
			<span>{userProfile.display_name}</span>
			<a href="!#" className=" mt-2">
				<img src={UserProfileIcon} className="" alt="UserProfileIcon" />
			</a>
		</div>
	);
}

export default Header;

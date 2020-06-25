import React, { useState, useEffect } from "react";
import UserProfileIcon from "../assets/img/userProfile.svg";

function Header({ token }) {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((profile) => {
		console.log("profile", profile);
		console.log(profile.images[0].url)
        setUserProfile(profile);
	  });
	 
  }, [token]);

 // console.log('userProfile:',userProfile)
  return (
    <div className="w-full">
      <div className="top-bar flex px-4 py-2 justify-end bg-gray_aside">
        <span>{userProfile.display_name}</span>
        <a href="!#" className=" mt-2 ml-2">
          <img src={userProfile.images ? (userProfile.images[0].url) : UserProfileIcon} className="w-10 h-10" alt="UserProfileIcon" />
        </a>
      </div>
    </div>
  );
}

export default Header;

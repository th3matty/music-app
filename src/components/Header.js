import React, { useState, useEffect } from "react";
import UserProfileIcon from "../assets/img/userProfile.svg";

function Header({ token }) {
  const [userProfile, setUserProfile] = useState({});
  const [userPic, setUserPic] = useState(UserProfileIcon);

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
        setUserProfile(profile);
        if (profile.images.length) {
          setUserPic(profile.images[0].url);
        }
      });
  }, [token]);

  // userProfile.images.length !== 0 ? userProfile.images[0].url : UserProfileIcon;

  // console.log('userProfile:',userProfile)
  return (
    <div className="w-full">
      <div className="top-bar flex px-4 py-2 justify-end bg-gray_aside">
        <span>{userProfile.display_name}</span>
        <a href="!#" className=" mt-2 ml-2">
          <img src={userPic} className="w-10 h-10" alt="UserProfileIcon" />
        </a>
      </div>
    </div>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import UserProfileIcon from "../assets/img/userProfile.svg";
import Logout from '../assets/img/logout.svg';

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

  //fixed top-0 inset-x-0
  return (
    <div className="w-full ">
      <div className="flex items-center justify-end bg-gray_aside text-white text-sm overflow-hidden fixed top-0 inset-x-0 rounded-r-big">
        <span>{userProfile.display_name}</span>
        <a href="!#" className=" mt-2 ml-2">
          <img src={userPic} className="w-10 h-10 rounded-full mb-2" alt="UserProfileIcon" />
        </a>
        <a href="!#" className=" mt-2 ml-2">
          <img src={Logout} className="mr-2 ml-2 mb-2 justify-end" alt="LogoutIcon" />
        </a>
      </div>
      
    </div>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import UserProfileIcon from "../assets/img/userProfile.svg";
import Logout from "../assets/img/logout.svg";
import waait from "waait";
import image from "../assets/img/Lyrisic_Artboard1.png";

// Our Header fetches the UsersProfile Pic from Spotify
// and as well the name
// next to it the logout Button which redirect the users to spotifiies authentification-site


function Header({ token }) {
  const [userProfile, setUserProfile] = useState({});
  const [userPic, setUserPic] = useState(UserProfileIcon);

  useEffect(() => {
    async function getProfile() {
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const profile = await response.json();
      console.log("profile", profile);
      setUserProfile(profile);
      await waait(300);
      if (profile.images) {
        if (profile.images.length) {
          setUserPic(profile.images[0].url);
        }
      }
    }
    getProfile();
  }, [token]);

  return (
    <div
      className="h-1/10 bg-gray_aside py-0.5 px-8 flex justify-between"
      id="header"
    >
      <div className="">
        <img
          className="mainLogo"
          src={image}
          alt="Main-Logo"
          width="115"
          height="115"
        />
      </div>
      <div className="flex justify-around items-center w-64">
        <span className="text-colorPallete_LightGreen text-l ">
          {userProfile.display_name}
        </span>

        <img
          src={userPic}
          className="w-10 h-10 rounded-full m-2 "
          alt="UserProfileIcon"
        />

        <a href="/">
          <img src={Logout} className="mt-1 ml-4" alt="LogoutIcon" />
        </a>
      </div>
    </div>
  );
}

export default Header;

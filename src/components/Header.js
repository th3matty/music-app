import React, { useState, useEffect } from "react";
import UserProfileIcon from "../assets/img/userProfile.svg";
import Logout from "../assets/img/logout.svg";
import waait from "waait";

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
      if (profile.images.length) {
        setUserPic(profile.images[0].url);
      }
    }
    getProfile();
  }, [token]);

  // console.log('userProfile:',userProfile)

  return (
    <div className="w-56 absolute top-0 right-0 bg-colorPallete_Blue rounded-full py-0.5 px-8 flex items-center">
      <div className="flex-1 px-4 mt-1 py-2">
        <span className="text-colorPallete_LightGreen text-sm ">
          {userProfile.display_name}
        </span>
        <a href="!#" className="  ">
          <img
            src={userPic}
            className="w-10 h-10 rounded-full "
            alt="UserProfileIcon"
          />
        </a>
      </div>
      <div className="">
        <a href="!#" className="">
          <img src={Logout} className="mt-1 ml-1" alt="LogoutIcon" />
        </a>
      </div>
    </div>
  );
}

export default Header;

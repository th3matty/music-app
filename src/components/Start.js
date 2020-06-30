import React from "react";
import image from "../assets/img/Lyrisic_Artboard1.png";

// Our Landing Page
// User should press the Login Button to join our App

function Start({ getToken }) {
  return (
    <div className="start">
      <h1>Welcome to </h1>
      <div className="logo m-5 p-5 flex justify-center">
        <img className="logo m-5 p-5" src={image} alt="logo" width="20%" />
      </div>
      <div>
        <button className="loginButton" onClick={getToken}>
          Login with Spotify
        </button>
      </div>
    </div>
  );
}

export default Start;

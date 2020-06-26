import React from "react";
// import React, { useState, useEffect } from "react";
import aboutUs from "../assets/img/aboutUs.svg";



export default function Footer() {

    //const [aboutUs, setAboutUs] = useState({});
    //useEffect(() => {})

    return (
        <div className="w-56 absolute bottom-0 right-0 bg-colorPallete_Blue rounded-full py-0.5 px-8 flex items-center">
      <div className="flex-1 px-4 mt-1 py-2">
      </div>
      <div className="">
      <a href="!#" className="">
          <img src={aboutUs} className="mt-2 ml-2 mb-2" alt="About Us" />
        </a>
      </div>
    </div>
    )
}

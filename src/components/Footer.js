import React from "react";
// import React, { useState, useEffect } from "react";
import aboutUs from "../assets/img/aboutUs.svg";



export default function Footer() {

    //const [aboutUs, setAboutUs] = useState({});
    //useEffect(() => {})

    return (
			<div className="px-4 py-2 bg-gray_aside flex items-center">
				<a href="!#" className="">
					<img src={aboutUs} className="mt-2 ml-2 mb-2" alt="About Us" />
				</a>
			</div>
		);
}

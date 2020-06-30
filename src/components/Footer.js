import React, { useEffect } from "react";
import aboutUs from "../assets/img/aboutUs.svg";
import Modal from "react-modal";

function Footer() {
  useEffect(() => {
    console.log("Footer rendert");
  });

  //const [aboutUs, setAboutUs] = useState({});
  //useEffect(() => {})

//   const openModal = (e) => {
//     e.preventDefault();
//     setIsOpen(true);
    
//   };
//   const closeModal = () => {
//     setIsOpen(false);
//   };

  return (
    <div className="px-4 py-2 bg-gray_aside flex items-center">
      <a href="!#" className="">
        <img src={aboutUs} className="mt-2 ml-2 mb-2" alt="About Us" />
      </a>
    </div>
  );
}
const customStyles = {
  overlay: {
    background: "rgba(0,0,0,0.7)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "70%",
    width: "60%",
    marginRight: "-50%",
    overflow: "auto",
    transform: "translate(-50%, -50%)",
  },
};
export default Footer;

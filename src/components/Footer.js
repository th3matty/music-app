import React, { useEffect, useState } from "react";
import aboutUs from "../assets/img/aboutUs.svg";
import Modal from "react-modal";
import CloseButton from "../assets/img/closeButton.svg";
import Heart from "../assets/img/heart.svg";
import image from "../assets/img/Lyrisic_Artboard1.png";
// In this Component we´re rendering the footer. Which got a SVG in it.
// OnClick (svg) a Modal will open with a short message from us :)

function Footer() {
  const [modalIsOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log("Footer rendert");
  });

  //const [aboutUs, setAboutUs] = useState({});
  //useEffect(() => {})

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="px-4 py-2 bg-gray_aside flex items-center">
      <a href="!#" className="">
        <img
          src={aboutUs}
          className="mt-2 ml-2 mb-2"
          alt="About Us"
          onClick={openModal}
        />
      </a>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="w-full">
          <header className=" flex justify-between items-center">
            <span className="text-base text-colorPallete_Blue mb-2 ml-1 ">
              {" "}
              About Us...
              <p className="text-xs mt-1">
                {" "}
                Three highly motivated young professionals on their way doin'
                awesome stuff
              </p>
            </span>{" "}
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 hover:pointer m-3"
            >
              <img src={CloseButton} className="" alt="Close" />
            </button>
          </header>
          <hr className="bg-gray_aside mt-2"></hr>
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              <img src={image} className=" flex-1" alt="heart"></img>
            </div>
            <div className=" p-4 flex flex-col justify-between leading-normal m-2">
              <div className="mb-8">
                <p className="text-sm flex items-center">
                  Made with
                  <img src={Heart} className="" alt="heart"></img>
                  by...
                </p>
              </div>
              <div className="">
                <ul className="text-base text-colorPallete_LightBlue">
                  <li>
                    <a href="https://github.com/osamaAlhaj">Osama</a>{" "}
                  </li>
                  <li>
                    <a href="https://github.com/Pensor">Paddy</a>
                  </li>
                  <li>
                    <a href="https://github.com/th3matty">Matty</a>
                  </li>
                </ul>
                <hr className="bg-gray_aside mt-2"></hr>
                <p>Stay put...more features are coming :)</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// CustomStyle for Modal
const customStyles = {
  overlay: {
    background: "rgba(0,0,0,0.7)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // height: "70%",
    width: "30%",
    height: "auto",
    // marginRight: "-50%",
    overflow: "auto",
    transform: "translate(-50%, -50%)",
  },
};
export default Footer;

import React, { useEffect, useState } from "react";
import SearchIcon from "../assets/img/search.svg";
import Modal from "react-modal";
import "../assets/SearchModal.css";
// import SearchModal from "./Search_Modal";

function Searchbar({ token }) {
  const [userSearch, setUserSeacher] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function getSearchContent() {
      fetch(
        `https://api.spotify.com/v1/search?q=${searchValue}&type=track%2Cartist&market=US&limit=30&offset=15`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((search) => {
          console.log("artistSeach:", search.tracks.items);
          setUserSeacher(userSearch);
        });
    }
    getSearchContent();
  }, [searchValue, token, userSearch]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
    console.log("button works");
    console.log(searchValue);
  };

  const closeModal = () =>{
    setIsOpen(false)
  }

  const handleChange = (value) => {
    //value.preventDefault();
    setSearchValue(value);
    console.log("search for", value);
  };

  return (
    <div>
      <form>
        <div className="flex items-center mt-1">
          <div>
            {/* <li className="border-l-4 border-colorPallete_Blue"> */}
            <button onClick={openModal} className="flex -1 ml-5 mr-3">
              <img src={SearchIcon} className="mr-1" alt="SearchIcon" />
            </button>
            <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={closeModal}>
              {/* An dieser Stelle kann man auslagern. */}
              {/* <SearchModal onRequestClose={closeModal}/> */}
              <div>
                <button onClick={closeModal}>X</button>
              </div>
            </Modal>
          </div>
          {/* </li> */}
          <input
            id="inputSearch"
            value={searchValue}
            onChange={(e) => handleChange(e.target.value)}
            type="text"
            className="py-2 mt-2 focus:bg-white focus:border-blue-400  hover:bg-colorPallete_LightGreen focus:outline-1 focus:shadow-outline border border-colorPallete_Blue rounded-lg appearance-none leading-normal text-colorPallete_Blue text-lg text-center "
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;

import React, { useEffect, useState } from "react";
import SearchIcon from "../assets/img/search.svg";
import Modal from "react-modal";
import CloseButton from "../assets/img/closeButton.svg";
import SimpleBar from "simplebar-react";

// In this Component we fetch the "search-api" from  Spotify
// We´re rendering a Modal which will display all searched Data from the Users input
// via hooks we can give away different props to different Sections above ( have a look at Aside.js - Component) ...
// ... Aisde.js => Main.js => Middleframe.js => TopMainView.js // Album.js // AlbumView.js

function Searchbar({ token, search, setAlbumID, setPlaylistID, setReleases }) {
  const [userSearch, setUserSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  async function getSearchContent() {
    fetch(
      `https://api.spotify.com/v1/search?q=${searchValue}&type=album%2Cartist&market=US&limit=30&offset=1`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      //.then((res)=> console.log(res))
      .then((result) => {
        console.log("artistSeach:", result.albums.items);
        setUserSearch(result.albums.items);
        return true;
      })
      .then(() => {
        setIsOpen(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log("SearchBar rendert");
  });

  const closeModal = () => {
    setIsOpen(false);
  };

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
            <button
              onClick={(e) => {
                e.preventDefault();
                getSearchContent();
              }}
              className="flex -1 ml-5 mr-3"
            >
              <img src={SearchIcon} className="mr-1" alt="SearchIcon" />
            </button>

            <Modal
              style={customStyles}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
            >
              <div className="w-full">
                <div className="flex-1">
                  <header className=" flex justify-between items-center">
                    <h3 className="text-xl text-colorPallete_MintGreen mb-2">
                      {" "}
                      Your Results for{" "}
                      <span className="text-2xl text-colorPallete_Blue mb-2 ml-1 hover:font-bold">
                        {searchValue}
                      </span>{" "}
                    </h3>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        getSearchContent(e.target.value);
                      }}
                    >
                      <input
                        onChange={(e) => handleChange(e.target.value)}
                        className="py-2 mt-2 mr-10 focus:bg-white focus:border-blue-400  hover:bg-colorPallete_LightGreen focus:outline-1 focus:shadow-outline border border-colorPallete_Blue rounded-lg appearance-none leading-normal text-colorPallete_Blue text-lg text-center"
                        placeholder="another search?"
                      ></input>
                    </form>
                    <button
                      onClick={closeModal}
                      className="absolute top-0 right-0 hover:pointer m-3"
                    >
                      <img src={CloseButton} className="" alt="Close" />
                    </button>
                  </header>
                </div>
                <hr className="bg-gray_aside mt-2"></hr>
                <SimpleBar style={{ maxHeight: 500 }}>
                  <div className="w-full mt-1 overflow-x-hidden">
                    {/* At this point we could build a new Component for better readability */}
                    <div className="flex flex-wrap">
                      {!userSearch
                        ? ""
                        : userSearch.map((item, index) => (
                            <div
                              className="max-w-sm rounded overflow-hidden shadow-lg m-2"
                              key={item.id}
                            >
                              {!item.images[1].url ? null : (
                                <button
                                  className="hover:pointer"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    console.log(item.id);
                                    setAlbumID(item.id);
                                    setPlaylistID("");
                                    setReleases(userSearch);
                                    setIsOpen(false);
                                  }}
                                >
                                  <img
                                    className="w-full"
                                    src={item.images[1].url}
                                    alt={item.name}
                                  ></img>
                                </button>
                              )}
                              <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                  <p>
                                    {item.name.length > 20
                                      ? item.name.substring(0, 20) + "..."
                                      : item.name}
                                  </p>
                                </div>
                              </div>
                              <hr className="bg-gray_aside mt-2 border-colorPallete_LightGreen w-3/4 m-8"></hr>
                              <div className="font-thin text-xs mb-1 text-center">
                                {item.release_date}
                              </div>
                            </div>
                          ))}
                    </div>
                    {/* At this point above we could build a new Component for better readability */}
                  </div>
                </SimpleBar>
              </div>
            </Modal>
          </div>
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
export default Searchbar;

// Auslagerung: kann gelöscht werden!


// const openModal = (e) => {
//   e.preventDefault();
//   setIsOpen(true);
//   console.log("button works");
//   console.log(searchValue);
// };

// <SearchModal
//                       userSearch={userSearch}
//                       searchValue={searchValue}
//                       search={search}
//                       userSearchID={userSearch.id}
//                     />

import React, { useEffect, useState } from "react";
import SearchIcon from "../assets/img/search.svg";
import Popup from "reactjs-popup";

function Searchbar({ token }) {
  const [userSearch, setUserSeacher] = useState([]);
  const [searchValue, setSearchValue] = useState(null);

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
        //.then(res => console.log(res))
        .then((search) => {
          console.log("artistSeach:", search.tracks.items);
          setUserSeacher(userSearch);
        });
    }
    getSearchContent();
  }, [searchValue, token, userSearch]);

  const handleChange = (value) => {
    //value.preventDefault();
    setSearchValue(value);
    console.log("search for", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mt-1">
          {/* <li className="border-l-4 border-colorPallete_Blue"> */}
          <Popup position="right center"><button className="flex -1 ml-5 mr-3">
            <img src={SearchIcon} className="mr-1" alt="SearchIcon" />
          </button>
          <div>Popup content here</div>
          </Popup>
          {/* </li> */}
          <input
            id="inputSearch"
            value={searchValue}
            onChange={(e) => handleChange(e.target.value)}
            type="text"
            className="  py-2 mt-2 focus:bg-white focus:border-blue-400  hover:bg-colorPallete_LightGreen focus:outline-1 focus:shadow-outline border border-colorPallete_Blue rounded-lg appearance-none leading-normal text-colorPallete_Blue text-lg text-center "
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;

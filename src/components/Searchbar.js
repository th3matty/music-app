import React, { useEffect, useState } from "react";
import SearchIcon from "../assets/img/search.svg";

function Searchbar({ token }) {
  const [searchList, setSearchList] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {

      function getSearchContent(){
          fetch(`https://api.spotify.com/v1/search?q=${searchValue}&type=track%2Cartist&market=US&limit=10&offset=5`,{
              method: 'GET',
              headers:{
                  Authorization: `Bearer ${token}`
              },

          })
          .then(res => res.json())
          .then(res => console.log(res))
          

      }
      getSearchContent()
  })

 

  const handleChange = (value) => {
    //value.preventDefault();
    setSearchValue(value)
    console.log('search for',value)
  };

  const handleSubmit = () =>{

  }
  return (
    <div>
      <form onSubmit= {handleSubmit} >
        <li className="border-l-4 border-colorPallete_Blue">
          <a href="#!" className="flex items-center mx-4 mt-4">
            <img src={SearchIcon} className="mr-3" alt="SearchIcon" />
            <input
              id="inputSearch"
              value={searchValue}
              onChange={(e) => handleChange(e.target.value)}
              type="text"
              className="focus:bg-white focus:border-blue-400 ml-3 hover:bg-colorPallete_LightGreen focus:outline-1 focus:shadow-outline border border-colorPallete_Blue rounded-lg py-2 px-10 block w-full appearance-none leading-normal text-colorPallete_Blue text-lg text-center "
            ></input>
          </a>
        </li>
      </form>
    </div>
  );
}

export default Searchbar;

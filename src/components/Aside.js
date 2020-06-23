import React, { Component } from 'react';
import '../assets/aside.css';

class Aside extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <ul className="right">
          <hr></hr>
          <li className="border-l-4 border-green-600">
            <a href className="flex items-center mx-4 mt-4">
              <svg
                className="fill-current text-white"
                id="Layer_1"
                enableBackground="new 0 0 511.995 511.995"
                height="20"
                viewBox="0 0 511.995 511.995"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m507.308 236.641-198.98-198.99c-28.86-28.85-75.8-28.85-104.66 0l-198.98 198.99c-6.25 6.25-6.25 16.38 0 22.63 6.24 6.25 16.38 6.25 22.62 0l12.69-12.69v203.4c0 25.405 20.595 46 46 46h80c5.523 0 10-4.477 10-10v-148c0-27.614 22.386-50 50-50h60c27.614 0 50 22.386 50 50v148c0 5.523 4.477 10 10 10h80c25.405 0 46-20.595 46-46v-203.4l12.69 12.69c3.12 3.12 7.22 4.69 11.31 4.69s8.19-1.57 11.31-4.69c6.25-6.25 6.25-16.38 0-22.63z" />
                </g>
              </svg>
              <button
                id="homeBtn"
                className="hover:bg-green-600  focus:outline-none focus:shadow-outline ml-2"
              >
                <span className="text-white">Home</span>
              </button>
            </a>
          </li>
          <li className="border-l-4 border-green-600">
            <a href className="flex items-center mx-4 mt-4">
              <svg
                className="fill-current text-white mr-3"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <g>
                  <g>
                    <path
                      d="M225.474,0C101.151,0,0,101.151,0,225.474c0,124.33,101.151,225.474,225.474,225.474
			c124.33,0,225.474-101.144,225.474-225.474C450.948,101.151,349.804,0,225.474,0z M225.474,409.323
			c-101.373,0-183.848-82.475-183.848-183.848S124.101,41.626,225.474,41.626s183.848,82.475,183.848,183.848
			S326.847,409.323,225.474,409.323z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M505.902,476.472L386.574,357.144c-8.131-8.131-21.299-8.131-29.43,0c-8.131,8.124-8.131,21.306,0,29.43l119.328,119.328
			c4.065,4.065,9.387,6.098,14.715,6.098c5.321,0,10.649-2.033,14.715-6.098C514.033,497.778,514.033,484.596,505.902,476.472z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <input
                id="inputSearch"
                className=" ml-3 hover:vbg-green-600 focus:outline-1 focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal "
              ></input>
            </a>
          </li>
        </ul>
        <br></br>
        <hr></hr>
        <p>Your Playlists</p>
      </div>
    );
  }
}

export default Aside;

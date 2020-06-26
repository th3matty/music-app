import React, { Component } from 'react';
import Playlist from './Playlist';
import '../assets/aside.css';
import HomeIcon from '../assets/img/home.svg';
import SearchIcon from '../assets/img/search.svg';

class Aside extends Component {
	render() {
		return (
			<div className="w-48 bg-gray_aside font-semibold text-sm text-gray-400">
				<div className="py-6">
					here comes our Logo
					<div className="">
						<ul className="right">
							<hr className="mt-3 mb-3"></hr>
							<li className="border-l-4 border-colorPallete_Blue">
								<a href="#!" className="flex items-center mx-4 mt-4">
									<img src={HomeIcon} className="mr-2" alt="HomeIcon" />
									<button id="homeBtn" className=" ml-2">
										<span className="text-colorPallete_LightGreen text-lg hover:font-bold">Home</span>
									</button>
								</a>
							</li>
							<li className="border-l-4 border-colorPallete_Blue">
								<a href="#!" className="flex items-center mx-4 mt-4">
									<img src={SearchIcon} className="mr-3" alt="SearchIcon" />
									<input
										id="inputSearch"
										className="focus:bg-white focus:border-blue-400 ml-3 hover:bg-colorPallete_LightGreen focus:outline-1 focus:shadow-outline border border-colorPallete_Blue rounded-lg py-2 px-10 block w-full appearance-none leading-normal text-colorPallete_Blue text-lg text-center "
									></input>
								</a>
							</li>
						</ul>
						<hr className="mt-3 mb-3"></hr>
						<Playlist token={this.props.token} setPlaylistID={this.props.setPlaylistID} />
					</div>
				</div>
			</div>
		);
	}
}

export default Aside;

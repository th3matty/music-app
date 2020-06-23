import React, { Component } from 'react';
import '../assets/aside.css';
import HomeIcon from '../assets/img/home.svg';
import SearchIcon from '../assets/img/search.svg';

class Aside extends Component {
	state = {
		playlists: [],
	};

	getPlaylists() {
		fetch('https://api.spotify.com/v1/me/playlists', {
			headers: {
				Authorization: `Bearer ${this.props.token}`,
			},
		})
			.then(res => res.json())
			.then(playlists => {
				console.log(playlists.items);
				this.setState({ playlists: playlists.items });
			});
	}

	componentDidMount() {
		this.getPlaylists();
	}

	render() {
		return (
			<div className="">
				<ul className="right">
					<hr></hr>
					<li className="border-l-4 border-green-600">
						<a href className="flex items-center mx-4 mt-4">
							<img src={HomeIcon} className="mr-2" />
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
							<img src={SearchIcon} className="mr-3" />
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
				<div>
					{this.state.playlists.map(playlist => (
						<p>{playlist.name}</p>
					))}
				</div>
			</div>
		);
	}
}

export default Aside;

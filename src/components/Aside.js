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
				</ul>
				<h4>this is the "Aside.js"-- Frame</h4>
				<br></br>
				<hr></hr>
				<p>Your Playlists</p>
			</div>
		);
	}
}

export default Aside;

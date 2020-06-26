import React, { Component } from 'react';
import Album from './Album';
import '../assets/main.css';
import 'simplebar/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';

class TopView extends Component {
	// in dieser Component wird das Album für den Oberen Bereich im Main.js gerendert()
	render() {
		return (
			<div>
				<h3 className="text-2xl mt-6 ml-6 text-colorPallete_LightGreen">New Releases</h3>

				<SimpleBar style={{ maxHeight: 1000, maxWidth: 1500 }}>
					<div className="flex p-8">
						{this.props.releases.map(release => (
							<Album playTrack={this.props.playTrack} release={release} key={release.id} />
						))}
					</div>
				</SimpleBar>
			</div>
		);
	}
}

export default TopView;

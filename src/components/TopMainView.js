import React, { Component } from 'react';
import Album from './Album';
import 'simplebar/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';

class TopView extends Component {

	componentDidUpdate(){
		console.log("TopmainView rendert")
	}
	// in dieser Component wird das Album für den Oberen Bereich im Main.js gerendert()
	render() {
		return (
			<div>
				<h3 className="text-2xl text-colorPallete_LightGreen"> {} </h3>

				<SimpleBar style={{ maxHeight: 1000, maxWidth: 1500 }}>
					<div className="flex p-8">
						{this.props.releases.map(release => (
							<Album
								playTrack={this.props.playTrack}
								release={release}
								key={release.id}
								setAlbumID={this.props.setAlbumID}
								setPlaylistID={this.props.setPlaylistID}	
								setReleases={this.props.setReleases}							
							/>
						))}
					</div>
				</SimpleBar>
			</div>
		);
	}
}

export default TopView;

import React from 'react';
import { TwitterPicker } from 'react-color';

function withColorPicker(Component) {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				color: '',
				showPicker: false,
			};
		}

		changeHandler = color => {
			this.setState({ color: color.hex });
		};

		render() {
			const popover = {
				position: 'absolute',
				zIndex: '2',
			};

			return (
				<div style={{ backgroundColor: this.state.color }}>
					<Component {...this.props} />
					{this.state.showPicker && (
						<div style={popover}>
							<TwitterPicker color={this.state.color} onChangeComplete={this.changeHandler} />
						</div>
					)}
					<span onClick={() => this.setState({ showPicker: !this.state.showPicker })}>C</span>
				</div>
			);
		}
	};
}

export default withColorPicker;

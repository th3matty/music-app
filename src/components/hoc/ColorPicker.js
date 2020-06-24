import React from 'react';
import { TwitterPicker } from 'react-color';
import PinselIcon from '../../assets/img/pinsel.svg';

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

		handleClose = () => {
			this.setState({ showPicker: false });
		};

		render() {
			return (
				<div style={{ backgroundColor: this.state.color }}>
					<Component {...this.props} />
					{this.state.showPicker && (
						<div className="absolute z-2 left-1/2">
							<div className="fixed inset-0" onClick={this.handleClose} />
							<TwitterPicker
								triangle="hide"
								color={this.state.color}
								onChangeComplete={this.changeHandler}
							/>
						</div>
					)}
					<span
						className="absolute right-0 bottom-0 cursor-pointer"
						onClick={() => this.setState({ showPicker: !this.state.showPicker })}
					>
						<img src={PinselIcon} />
					</span>
				</div>
			);
		}
	};
}

export default withColorPicker;

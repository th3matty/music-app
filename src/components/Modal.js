import React from "react";
import ReactDOM from 'react-dom';

// We get hold of the div with the id modal that we have created in index.html
const modalRoot = document.getElementById("modal-root");


class Modal extends React.Component {
  constructor(props) {
    super(props);
    // create an element div for this modal
    this.element = document.createElement("div");
  } // append the created div to the div#modal
  componentDidMount() {
    modalRoot.appendChild(this.element);
    console.log('Modal did mount');
  }
  /**
   * remove the created div when this Modal Component is unmounted
   * Used to clean up the memory to avoid memory leak
   */
  componentWillUnmount() {
    console.log('Modal will unmount');
    modalRoot.removeChild(this.element);
  }
  render() {
    return ReactDOM(this.props.children, this.element);
  }
}
export default Modal;

import React from "react";
import "./Modal.css";

class Modal extends React.Component {
  render() {
    return (
      <div>
        <div className="overlay" onClick={this.closeModal}>
          <div className="modal">
            <div className="modal-body">
              <div className="modal-body-header">
                <h3>Hello</h3>
              </div>
              <div className="modal-body-content">
                <p>{this.props.text}</p>
              </div>

              <div className="modal-body-footer">
                {this.props.add}
                <button onClick={this.props.closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

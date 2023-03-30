import React, { useState } from "react";
import "./Modal.css";

function Modal(props) {
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
    props.closeModal();
  };

  return (
    <>
      {modalOpen && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal">
            <div className="modal-body">
              <div className="modal-body-header">
                <h3>Hello</h3>
              </div>
              <div className="modal-body-content">
                <p>{props.text}</p>
              </div>
              <div className="modal-body-footer">
                {props.add}
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;

import React from "react";
import ReactDOM from "react-dom";
import "../styles/Modal.css";

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal-div">{children}</div>,
    document.getElementById("modal")
  );
};

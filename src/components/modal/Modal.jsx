import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ children, onClose }) => {
  const handleOverlayClick = (e) => {
    // Detecta clics fuera del contenedor del modal
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        {/* Botón para cerrar el modal */}
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

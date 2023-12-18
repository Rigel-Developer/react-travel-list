import React from 'react';
import '../modal.css'; // Make sure to create this CSS file

const Modal = ({ text, isOpen, onClose }) => {
  if (!isOpen) return null;
    
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>{text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

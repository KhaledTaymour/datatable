import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";
import customersInterface from "interfaces/customersInterface";
import { Button } from "antd";

interface Props {
  header: string;
  isOpen: boolean;
  onClose: () => void;
  // selectedRecord: customersInterface;
  // isEditOpened: boolean;
}
const Modal: React.FC<Props> = ({ header, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-container">
      <div className="modal-body">
        <div className="modal__header">
          <h3>{header}</h3>
          <Button className="close" onClick={onClose}>
            ❌
          </Button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

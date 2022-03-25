import React from "react";
import "./DeleteModal.scss";
import { Button, notification } from "antd";

interface Props {
  customerFName: string;
  customerLName: string;
  customerEmail: string;
  handleDeleteCustomer: any;
  handleCloseModal: any;
}
const DeleteModal: React.FC<Props> = ({
  customerFName,
  customerLName,
  customerEmail,
  handleDeleteCustomer,
  handleCloseModal,
}) => {
  return (
    <div className="delete-modal__container">
      <p>{`Are you sure you want to delete the customer ${customerFName} ${customerLName}?`}</p>
      <div className="delete-modal__actions">
        <Button onClick={handleCloseModal}>{`No`}</Button>
        <Button
          onClick={handleDeleteCustomer}
          type="primary"
          danger
        >{`Yes`}</Button>
      </div>
    </div>
  );
};

export default DeleteModal;

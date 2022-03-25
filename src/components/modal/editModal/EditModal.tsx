import React from "react";
import "./EditModal.scss";
import { Button, notification } from "antd";

interface Props {
  customerFName: string;
  setCustomerFName: any;
  customerLName: string;
  setCustomerLName: any;
  customerEmail: string;
  setCustomerEmail: any;
  handleSaveEditing: any;
}
const EditModal: React.FC<Props> = ({
  customerFName,
  setCustomerFName,
  customerLName,
  setCustomerLName,
  customerEmail,
  setCustomerEmail,
  handleSaveEditing,
}) => {
  return (
    <div className="edit-modal__container">
      <label>
        First Name
        <input
          type={"text"}
          value={customerFName}
          onChange={(e) => setCustomerFName(e.target.value)}
        />
      </label>
      <label>
        Last Name
        <input
          type={"text"}
          value={customerLName}
          onChange={(e) => setCustomerLName(e.target.value)}
        />
      </label>
      <label>
        Email
        <input
          type={"text"}
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
        />
      </label>
      <Button onClick={handleSaveEditing} type="primary">{`Save`}</Button>
    </div>
  );
};

export default EditModal;

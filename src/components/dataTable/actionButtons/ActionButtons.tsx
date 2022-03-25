import React from "react";
import "./ActionButtons.scss";
import { Button, notification } from "antd";
import customersInterface from "interfaces/customersInterface";

interface Props {
  record: customersInterface;
  setIsModalOpen: (value: boolean) => void;
  setIsEditOpened: (value: boolean) => void;
  setIsDeleteOpened: (value: boolean) => void;
  setSelectedRecord: (value: customersInterface) => void;
}
const ActionButtons: React.FC<Props> = ({
  record,
  setIsModalOpen,
  setIsEditOpened,
  setIsDeleteOpened,
  setSelectedRecord,
}) => {
  const handleEditCustomer = async (e: React.MouseEvent) => {
    setIsModalOpen(true);
    setIsEditOpened(true);
    setSelectedRecord(record);
  };

  const handleDeleteCustomer = async (e: React.MouseEvent) => {
    setIsModalOpen(true);
    setIsDeleteOpened(true);
    setSelectedRecord(record);
  };

  return (
    <div className="action-buttons__container">
      <Button type="primary" onClick={handleEditCustomer}>{`Edit`}</Button>
      <Button
        type="primary"
        danger
        onClick={handleDeleteCustomer}
      >{`Delete`}</Button>
    </div>
  );
};

export default ActionButtons;

import React, { useState, useEffect, ReactComponentElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "antd";

import useFetch from "customHooks/useFetch";
// components
import Modal from "components/modal/Modal";
import ActionButtons from "components/dataTable/actionButtons/ActionButtons";
import { Button, notification } from "antd";
// configs
import configs from "app.config.json";
import customersInterface from "interfaces/customersInterface";
// store
import {
  deleteCustomerInStore,
  fillCustomersFromDB,
  updateCustomerInStore,
} from "redux/actions/customersActions";
import customersSelector from "redux/selectors/customersSelector";
import EditModal from "components/modal/editModal/EditModal";
import DeleteModal from "components/modal/deleteModal/DeleteModal";

const DataTable = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditOpened, setIsEditOpened] = useState<boolean>(false);
  const [isDeleteOpened, setIsDeleteOpened] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<any>();

  const [customerId, setCustomerId] = useState(0);
  const [customerFName, setCustomerFName] = useState("");
  const [customerLName, setCustomerLName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const url = configs.services.domain + configs.services.getAllCustomers;
  const { data, isLoading, isError } = useFetch(url);

  const dispatch = useDispatch();
  useEffect(() => {
    if (data?.length) {
      dispatch(fillCustomersFromDB(data));
    }
  }, [data]);

  const customers = useSelector(customersSelector);

  const columns = [
    { title: "First Name", dataIndex: "first_name", key: "first_name" },
    { title: "Second Status", dataIndex: "last_name", key: "last_name" },
    { title: "E-mail", dataIndex: "email", key: "email", width: 250 },
    {
      title: "",
      dataIndex: "",
      key: "",
      width: 250,
      render: (text: any, record: any) => {
        return (
          <ActionButtons
            record={record}
            setIsModalOpen={setIsModalOpen}
            setIsEditOpened={setIsEditOpened}
            setIsDeleteOpened={setIsDeleteOpened}
            setSelectedRecord={setSelectedRecord}
          />
        );
      },
    },
  ];

  useEffect(() => {
    if (selectedRecord) {
      setCustomerId(selectedRecord.id);
      setCustomerFName(selectedRecord.first_name);
      setCustomerLName(selectedRecord.last_name);
      setCustomerEmail(selectedRecord.email);
    }
  }, [selectedRecord]);

  const handleCloseModal = () => {
    if (isEditOpened) {
      setIsEditOpened(false);
    } else if (isDeleteOpened) {
      setIsDeleteOpened(false);
    }
    setIsModalOpen(false);
  };

  const handleSaveEditing = () => {
    if (isEditOpened) {
      setIsEditOpened(false);
    }
    dispatch(
      updateCustomerInStore({
        id: selectedRecord.id,
        first_name: customerFName,
        last_name: customerLName,
        email: customerEmail,
      })
    );
    setIsModalOpen(false);
  };

  const handleDeleteCustomer = () => {
    if (isDeleteOpened) {
      setIsDeleteOpened(false);
    }
    dispatch(deleteCustomerInStore(selectedRecord.id));
    setIsModalOpen(false);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={customers}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 340 }}
      />
      <Modal
        header={isEditOpened ? "Edit" : "Delete"}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        {isEditOpened ? (
          <EditModal
            customerFName={customerFName}
            setCustomerFName={setCustomerFName}
            customerLName={customerLName}
            setCustomerLName={setCustomerLName}
            customerEmail={customerEmail}
            setCustomerEmail={setCustomerEmail}
            handleSaveEditing={handleSaveEditing}
          />
        ) : (
          <DeleteModal
            customerFName={customerFName}
            customerLName={customerLName}
            customerEmail={customerEmail}
            handleDeleteCustomer={handleDeleteCustomer}
            handleCloseModal={handleCloseModal}
          />
        )}
      </Modal>
    </>
  );
};

export default DataTable;

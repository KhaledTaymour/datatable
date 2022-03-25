import { actionTypeEnum } from "enums";
import customersInterface from "interfaces/customersInterface";

export type fillCustomersActionType = {
  type: actionTypeEnum.FILL_CUSTOMERS;
  payload: customersInterface[];
};

export type updateCustomerActionType = {
  type: actionTypeEnum.UPDATE_CUSTOMER;
  payload: customersInterface;
};

export type deleteCustomerActionType = {
  type: actionTypeEnum.DELETE_CUSTOMER;
  payload: number;
};

export type actionDispatchTypes =
  | fillCustomersActionType
  | updateCustomerActionType
  | deleteCustomerActionType;

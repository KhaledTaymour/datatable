import customersInterface from "interfaces/customersInterface";
import { actionTypeEnum } from "enums";
import { Dispatch } from "redux";
import { actionDispatchTypes } from "redux/actionTypes";

export const fillCustomersFromDB =
  (data: customersInterface[]) =>
  async (dispatch: Dispatch<actionDispatchTypes>) => {
    dispatch({
      type: actionTypeEnum.FILL_CUSTOMERS,
      payload: data,
    });
  };

export const updateCustomerInStore =
  (data: customersInterface) =>
  async (dispatch: Dispatch<actionDispatchTypes>) => {
    dispatch({
      type: actionTypeEnum.UPDATE_CUSTOMER,
      payload: data,
    });
  };

export const deleteCustomerInStore =
  (id: number) => async (dispatch: Dispatch<actionDispatchTypes>) => {
    dispatch({
      type: actionTypeEnum.DELETE_CUSTOMER,
      payload: id,
    });
  };

import { actionTypeEnum } from "enums";
import customersInterface from "interfaces/customersInterface";
import { actionDispatchTypes } from "redux/actionTypes";

const initialState: customersInterface[] = [];

const customersReducer = (
  state: customersInterface[] = initialState,
  action: actionDispatchTypes
): customersInterface[] => {
  switch (action.type) {
    case actionTypeEnum.FILL_CUSTOMERS:
      return action.payload;
    case actionTypeEnum.UPDATE_CUSTOMER:
      return state.map((cust) =>
        cust.id === action.payload.id ? action.payload : cust
      );
    case actionTypeEnum.DELETE_CUSTOMER:
      return state.filter((cust) => cust.id !== action.payload);
    default:
      return state;
  }
};

export default customersReducer;

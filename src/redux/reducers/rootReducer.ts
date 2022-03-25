import { combineReducers } from "redux";
import customers from "./customersReducer";

const reducer = combineReducers({ customers });

export default reducer;

export type RootState = ReturnType<typeof reducer>;
import { RootState } from "redux/reducers/rootReducer";

export const customersSelector = (state: RootState) => state.customers;

export default customersSelector;

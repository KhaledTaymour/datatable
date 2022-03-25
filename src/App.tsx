import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import DataTable from "./components/dataTable/DataTable";
// store
import { Provider } from "react-redux";
import store from "redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Data Table</h1>
        <div className="data-table__container">
          <DataTable />
        </div>
      </Provider>
    </div>
  );
}

export default App;

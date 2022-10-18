import "./App.css";
import Login from "./components/login";
import CustomerDetails from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Tabledata from "./components/TableData";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Login />} />

        <Route path="dashboard" element={<CustomerDetails />}>
          <Route path="data" element={<Tabledata />} />
          <Route path="chart" element={<Chart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// adminRoutes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import "./App.css";
import AdminHome from "./adminHome";
import AdminOrders from "./adminOrders";
import AdminAddProduct from "./adminAddProduct";
import AdNav from "../components/AdNav";

export default function AdminRoutes() {
  return (
    <Router>
      <div className="dashboard-container">
       <AdNav/>

      </div>
    </Router>
  );
}

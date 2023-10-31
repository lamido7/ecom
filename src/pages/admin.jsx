// adminRoutes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideBar from "../components/Sidebar";
import sidebar_menu from "../constants/sidebar-menu";

import "./App.css";
import AdminHome from "./adminHome";
import AdminOrders from "./adminOrders";
import AdminAddProduct from "./adminAddProduct";

export default function AdminRoutes() {
  return (
    <Router>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />

        {/* <div className="dashboard-body">
          <Routes>
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/orders" element={<AdminOrders />} />
            <Route path="/add-product" element={<AdminAddProduct />} />
          </Routes>
        </div> */}
      </div>
    </Router>
  );
}

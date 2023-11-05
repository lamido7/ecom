// adminRoutes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import SideBar from "../components/Sidebar";
// import sidebar_menu from "../constants/sidebar-menu";

import "./App.css";

import AdNav from "../components/AdNav";

export default function AdminProfile() {
  return (
    <Router>
      <div className="dashboard-container">
       <AdNav/>

      </div>
    </Router>
  );
}

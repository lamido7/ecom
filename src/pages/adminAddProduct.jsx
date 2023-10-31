// AdminAddProduct.js
import React from "react";

import SideBar from "../components/Sidebar";
import sidebar_menu from "../constants/sidebar-menu";

function AdminAddProduct() {
  return (
    <div className="dashboard-container">
      <SideBar menu={sidebar_menu} />

      <div className="dashboard-body">Product</div>
    </div>
  );
}

export default AdminAddProduct;

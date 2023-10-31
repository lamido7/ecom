// AdminHome.js
import React from 'react';
import SideBar from '../components/Sidebar';
import sidebar_menu from '../constants/sidebar-menu';


function AdminHome() {
  return (
    <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />
        <div className="dashboard-body">
          Home
        </div>
  </div>
  );
}

export default AdminHome;

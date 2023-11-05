// AdminHome.js
import React from "react";
import AdNav from "../components/AdNav";
import Card from "../components/card";

function AdminHome() {
  return (
    <div className="dashboard-container">
      <AdNav />

      <div className="dashboard-body">
        <div className="dashboard-content">
          <div className="dashboard-content-admin">
            <div className="dashboard-content-container bg-light">
              <div className="card-row">
                <Card title="Total Users" content="1,234" />
                <Card title="Revenue" content="$10,000" />
                <Card title="Orders" content="567" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;

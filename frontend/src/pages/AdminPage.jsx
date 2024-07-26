import React from "react";
import Sidebar from "../components/Sidebar";
import AdminContent from "../components/AdminContent"; // Създайте този компонентw
import "../styles/adminPage.css";

const AdminPage = () => {
  const userRole = 'admin';
  return (
    <div className="dashboard dashboard-red">
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <AdminContent />
      </div>
    </div>
  );
};

export default AdminPage;
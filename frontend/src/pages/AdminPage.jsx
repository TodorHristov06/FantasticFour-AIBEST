import React from "react";
import Sidebar from "../components/Sidebar";
import AdminContent from "../components/AdminContent"; // Създайте този компонент
import Profile from "../components/Profile";
import "../styles/adminPage.css";

const AdminPage = () => {
  const userRole = 'admin';
  return (
    <div className="dashboard dashboard-red">
        <Sidebar role={userRole} />
      <div className="dashboard--content">
        <AdminContent />
        {/* <Profile role={userRole} /> */}
      </div>
    </div>
  );
};

export default AdminPage;
import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Profile from "../components/Profile";
import Card from "../components/Card";
import "../styles/adminPage.css";

const AdminPage = () => {
  const userRole = 'admin';
  return (
    <div className="dashboard dashboard-red">
        <Sidebar role={userRole} />
      <div className="dashboard--content">
        <Content/>
        <Profile role={userRole} />
      </div>
    </div>
  );
};

export default AdminPage;

import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Profile from "../components/Profile";
import Card from "../components/Card";
import "../styles/studentPage.css";

const StudentPage = () => {
  const userRole = 'student';
  return (
    <div className="dashboard dashboard-blue">
        <Sidebar role={userRole} />
      <div className="dashboard--content">
        <Content/>
        <Profile role={userRole} />
      </div>
    </div>
  );
};

export default StudentPage;
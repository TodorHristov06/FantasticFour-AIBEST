import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Profile from "../components/Profile";
import Card from "../components/Card";
import "../styles/teacherPage.css";

const TeacherPage = () => {
  const userRole = 'teacher';
  return (
    <div className="dashboard dashboard-green">
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <Content />
        <Profile role={userRole} />
      </div>
    </div>
  );
};

export default TeacherPage;

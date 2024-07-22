import React from "react";
import Sidebar from "../components/Sidebar";
import StudentContent from "../components/StudentContent"; // Създайте този компонент
import Profile from "../components/Profile";
import "../styles/studentPage.css";

const StudentPage = () => {
  const userRole = 'student';
  return (
    <div className="dashboard dashboard-blue">
        <Sidebar role={userRole} />
      <div className="dashboard--content">
        <StudentContent />
        <Profile role={userRole} />
      </div>
    </div>
  );
};

export default StudentPage;
import React from "react";
import Sidebar from "../components/Sidebar";
import TeacherContent from "../components/TeacherContent";
import "../styles/teacherPage.css";

const TeacherPage = () => {
  const userRole = 'teacher';
  
  return (
    <div className="dashboard dashboard-green">
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <TeacherContent />
      </div>
    </div>
  );
};

export default TeacherPage;

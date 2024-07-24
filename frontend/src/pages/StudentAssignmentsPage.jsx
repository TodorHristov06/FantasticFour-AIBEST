// src/pages/StudentAssignmentsPage.jsx

import React from "react";
import { BiTask, BiTime, BiUser, BiBook } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import "../styles/studentAssignmentsPage.css"; // Вашите стилове

const StudentAssignmentsPage = () => {
  const userRole = 'student'; // Ролята на потребителя

  const assignments = [
    { id: 1, title: "Homework 1", description: "Solve the equations and submit your solutions.", subject: "Math 101", deadline: "2024-07-31", teacher: "Mr. John Doe" },
    { id: 2, title: "Essay", description: "Write an essay on the given topic.", subject: "English Literature", deadline: "2024-08-10", teacher: "Ms. Jane Smith" },
    { id: 3, title: "Lab Report", description: "Submit your lab report for the experiment conducted.", subject: "Physics Fundamentals", deadline: "2024-08-05", teacher: "Dr. Emily Brown" },
  ];

  return (
    <div className={`dashboard ${userRole === 'student' ? 'dashboard-student' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="assignments-list">
          <h2>Your Assignments</h2>
          <div className="assignments">
            {assignments.map((assignment) => (
              <div key={assignment.id} className="assignment-card">
                <div className="assignment-header">
                  <BiTask className="icon" />
                  <h3>{assignment.title}</h3>
                </div>
                <div className="assignment-details">
                  <div className="assignment-detail">
                    <BiBook className="icon" />
                    <span><strong>Subject:</strong> {assignment.subject}</span>
                  </div>
                  <div className="assignment-detail">
                    <BiTime className="icon" />
                    <span><strong>Deadline:</strong> {assignment.deadline}</span>
                  </div>
                  <div className="assignment-detail">
                    <BiUser className="icon" />
                    <span><strong>Teacher:</strong> {assignment.teacher}</span>
                  </div>
                  <div className="assignment-detail">
                    <p>{assignment.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAssignmentsPage;

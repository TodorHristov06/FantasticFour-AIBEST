// src/pages/StudentGradesPage.jsx

import React from "react";
import { BiTask, BiBook, BiUser, BiCheckCircle, BiTimeFive } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import "../styles/studentGradesPage.css"; // Вашите стилове

const StudentGradesPage = () => {
  const userRole = 'student'; // Ролята на потребителя

  const grades = [
    { id: 1, title: "Homework 1", subject: "Math 101", teacher: "Mr. John Doe", grade: "A", maxPoints: 100 },
    { id: 2, title: "Essay", subject: "English Literature", teacher: "Ms. Jane Smith", grade: "B+", maxPoints: 50 },
    { id: 3, title: "Lab Report", subject: "Physics Fundamentals", teacher: "Dr. Emily Brown", grade: null, maxPoints: 75 },
  ];

  return (
    <div className={`dashboard ${userRole === 'student' ? 'dashboard-student' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="grades-list">
          <h2>Your Grades</h2>
          <div className="grades">
            {grades.map((grade) => (
              <div key={grade.id} className="grade-card">
                <div className="grade-header">
                  <BiTask className="icon" />
                  <h3>{grade.title}</h3>
                </div>
                <div className="grade-details">
                  <div className="grade-detail">
                    <BiBook className="icon" />
                    <span><strong>Subject:</strong> {grade.subject}</span>
                  </div>
                  <div className="grade-detail">
                    <BiUser className="icon" />
                    <span><strong>Teacher:</strong> {grade.teacher}</span>
                  </div>
                  <div className="grade-detail">
                    <BiCheckCircle className="icon" />
                    <span>
                      <strong>Grade:</strong> {grade.grade ? grade.grade : <span className="not-graded">Not graded</span>}
                    </span>
                  </div>
                  <div className="grade-detail">
                    <span><strong>Max Points:</strong> {grade.maxPoints}</span>
                  </div>
                  {!grade.grade && (
                    <div className="not-graded-alert">
                      <BiTimeFive className="icon" />
                      <span>This assignment has not been graded yet</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentGradesPage;

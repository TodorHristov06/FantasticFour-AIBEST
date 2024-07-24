import React from "react";
import { useTranslation } from 'react-i18next'; // Импортирайте useTranslation
import { BiTask, BiTime, BiUser, BiBook, BiCheck, BiX } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import "../styles/studentAssignmentsPage.css"; // Вашите стилове

const StudentAssignmentsPage = () => {
  const { t } = useTranslation(); // Използвайте useTranslation за локализация
  const userRole = 'student'; // Ролята на потребителя

  const assignments = [
    { id: 1, title: "Homework 1", description: "Solve the equations and submit your solutions.", subject: "Math 101", deadline: "2024-07-31", teacher: "Mr. John Doe", graded: true },
    { id: 2, title: "Essay", description: "Write an essay on the given topic.", subject: "English Literature", deadline: "2024-08-10", teacher: "Ms. Jane Smith", graded: true },
    { id: 3, title: "Lab Report", description: "Submit your lab report for the experiment conducted.", subject: "Physics Fundamentals", deadline: "2024-08-05", teacher: "Dr. Emily Brown", graded: false },
  ];

  return (
    <div className={`dashboard ${userRole === 'student' ? 'dashboard-student' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="assignments-list">
          <h2>{t('your_assignments')}</h2> {/* Локализиране на заглавието */}
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
                    <span><strong>{t('subject')}:</strong> {assignment.subject}</span> {/* Локализиране на заглавия */}
                  </div>
                  <div className="assignment-detail">
                    <BiTime className="icon" />
                    <span><strong>{t('deadline')}:</strong> {assignment.deadline}</span> {/* Локализиране на заглавия */}
                  </div>
                  <div className="assignment-detail">
                    <BiUser className="icon" />
                    <span><strong>{t('teacher')}:</strong> {assignment.teacher}</span> {/* Локализиране на заглавия */}
                  </div>
                  <div className="assignment-detail">
                    <p>{assignment.description}</p>
                  </div>
                  <div className="assignment-detail graded">
                    {assignment.graded ? (
                      <>
                        <BiCheck className="icon graded" />
                        <span><strong>{t('status')}:</strong> {t('graded')}</span> {/* Локализиране на статуса */}
                      </>
                    ) : (
                      <>
                        <BiX className="icon not-graded" />
                        <span><strong>{t('status')}:</strong> {t('not_graded')}</span> {/* Локализиране на статуса */}
                      </>
                    )}
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

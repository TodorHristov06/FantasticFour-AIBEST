import React from "react";
import { useTranslation } from 'react-i18next'; // Импортирайте useTranslation
import { BiTask, BiBook, BiUser, BiCheckCircle, BiTimeFive, BiCommentDetail } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import "../styles/studentGradesPage.css"; // Вашите стилове

const StudentGradesPage = () => {
  const { t } = useTranslation(); // Използвайте useTranslation за локализация
  const userRole = 'student'; // Ролята на потребителя

  const grades = [
    { id: 1, title: "Homework 1", subject: "Math 101", teacher: "Mr. John Doe", grade: "A", maxPoints: 100, studentComment: "I worked really hard on this!", feedback: "Keep up the good work!" },
    { id: 2, title: "Essay", subject: "English Literature", teacher: "Ms. Jane Smith", grade: "B+", maxPoints: 50, studentComment: "Tried to incorporate feedback from previous essay.", feedback: "Try to elaborate more in your next essay." },
    { id: 3, title: "Lab Report", subject: "Physics Fundamentals", teacher: "Dr. Emily Brown", grade: null, maxPoints: 75, studentComment: "Awaiting feedback.", feedback: "Pending evaluation." },
  ];

  return (
    <div className={`dashboard ${userRole === 'student' ? 'dashboard-student' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="grades-list">
          <h2>{t('your_grades')}</h2> {/* Локализиране на заглавието */}
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
                    <span><strong>{t('subject')}:</strong> {grade.subject}</span> {/* Локализиране на заглавия */}
                  </div>
                  <div className="grade-detail">
                    <BiUser className="icon" />
                    <span><strong>{t('teacher')}:</strong> {grade.teacher}</span> {/* Локализиране на заглавия */}
                  </div>
                  <div className="grade-detail">
                    <BiCheckCircle className="icon" />
                    <span>
                      <strong>{t('grade')}:</strong> {grade.grade ? grade.grade : <span className="not-graded">{t('not_graded')}</span>}
                    </span> {/* Локализиране на оценките */}
                  </div>
                  <div className="grade-detail">
                    <span><strong>{t('max_points')}:</strong> {grade.maxPoints}</span> {/* Локализиране на заглавия */}
                  </div>
                  <div className="grade-detail">
                    <BiCommentDetail className="icon" />
                    <span><strong>{t('student_comment')}:</strong> {grade.studentComment ? grade.studentComment : <span className="not-graded">{t('no_comment')}</span>}</span> {/* Локализиране на коментари */}
                  </div>
                  <div className="grade-detail">
                    <BiCommentDetail className="icon" />
                    <span><strong>{t('feedback')}:</strong> {grade.feedback ? grade.feedback : <span className="not-graded">{t('no_feedback')}</span>}</span> {/* Локализиране на обратна връзка */}
                  </div>
                  {!grade.grade && (
                    <div className="not-graded-alert">
                      <BiTimeFive className="icon" />
                      <span>{t('not_graded_yet')}</span> {/* Локализиране на съобщението за неоценени задачи */}
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

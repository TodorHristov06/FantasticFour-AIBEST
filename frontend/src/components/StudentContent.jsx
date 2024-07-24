import React from "react";
import StudentHeader from "./StudentHeader";
import "../styles/studentContent.css"; // Създайте този файл със стиловете за съдържанието на студента
import StudentCard from '../components/StudentCard'; // Създайте този компонент
import StudentList from "./StudentList"; // Създайте този компонент

const StudentContent = () => {
  return (
    <div className="student-content">
      <StudentHeader />
      <StudentCard />
      <StudentList />
    </div>
  );
};

export default StudentContent;
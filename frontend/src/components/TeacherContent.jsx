import React from "react";
import TeacherHeader from "./TeacherHeader";
import "../styles/teacherContent.css"; // Създайте този файл със стиловете за съдържанието на учителя
import TeacherCard from '../components/TeacherCard'; // Създайте този компонент
import TeacherList from "./TeacherList"; // Съществуващ компонент

const TeacherContent = () => {
  return (
    <div className="teacher-content">
      <TeacherHeader />
      <TeacherCard />
      <TeacherList />
    </div>
  );
};

export default TeacherContent;
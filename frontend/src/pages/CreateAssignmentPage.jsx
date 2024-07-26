import React, { useState } from "react";
import Select from "react-select";
import { BiTask, BiListUl, BiUser } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next"; // Импортиране на useTranslation
import "../styles/createAssignmentPage.css"; // Вашите стилове

const CreateAssignment = () => {
  const { t } = useTranslation(); // Използване на useTranslation
  const userRole = 'teacher'; // Актуализирайте според нуждите

  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [deadline, setDeadline] = useState("");
  const [points, setPoints] = useState(""); // Ново състояние за точките
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [error, setError] = useState("");

  const classes = [
    { id: 1, name: 'Math 101' },
    { id: 2, name: 'English Literature' },
    { id: 3, name: 'Physics Fundamentals' },
  ];

  const students = [
    { id: 1, name: 'Tom Brown' },
    { id: 2, name: 'Lucy White' },
    { id: 3, name: 'Emma Green' },
  ];

  const handleCreateAssignment = () => {
    // Проверка за задна дата на deadline
    const today = new Date();
    const deadlineDate = new Date(deadline);
    
    if (deadlineDate < today) {
      setError(t("deadline_error"));
      return;
    }

    const newAssignment = {
      id: assignments.length + 1,
      title: assignmentTitle,
      instructions: instructions,
      deadline: deadline,
      points: points, // Добавяне на точките към новото задание
    };
    setAssignments([...assignments, newAssignment]);
    console.log(`Created assignment: ${assignmentTitle}`);
    console.log(`Instructions: ${instructions}`);
    console.log(`Deadline: ${deadline}`);
    console.log(`Points: ${points}`);
    setAssignmentTitle("");
    setInstructions("");
    setDeadline("");
    setPoints(""); // Нулиране на полето за точки
    setError("");
  };

  const handleAssignAssignment = () => {
    if (selectedAssignment) {
      console.log(`Assigned assignment: ${selectedAssignment.label}`);
      console.log(`Assigned to class: ${selectedClass ? selectedClass.label : "None"}`);
      console.log(`Assigned to students: ${selectedStudents.map(student => student.label).join(", ")}`);
    }
  };

  return (
    <div className={`dashboard ${userRole === 'teacher' ? 'dashboard-teacher' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="create-assignment">
          <h2>{t("create_assignment")}</h2>
          <div className="assignment-form">
            {/* Assignment Details */}
            <div className="assignment-details">
              <div className="assignment-form__header">
                <BiTask className="icon" />
                <h3>{t("assignment_details")}</h3>
              </div>
              <div className="form-group">
                <label htmlFor="assignment-title">{t("assignment_title")}</label>
                <input
                  type="text"
                  id="assignment-title"
                  value={assignmentTitle}
                  onChange={(e) => setAssignmentTitle(e.target.value)}
                  placeholder={t("enter_assignment_title")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="instructions">{t("instructions")}</label>
                <textarea
                  id="instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder={t("provide_instructions")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="deadline">{t("deadline")}</label>
                <input
                  type="date"
                  id="deadline"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="points">{t("points")}</label>
                <input
                  type="number"
                  id="points"
                  value={points}
                  onChange={(e) => setPoints(e.target.value)}
                  placeholder={t("enter_points")}
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button className="create-assignment-button" onClick={handleCreateAssignment}>{t("create")}</button>
            </div>

            {/* Assign Assignment */}
            <div className="assign-assignment">
              <div className="assignment-form__header">
                <BiListUl className="icon" />
                <h3>{t("assign_assignment")}</h3>
              </div>
              <div className="form-group">
                <label htmlFor="assignments">{t("select_assignment")}</label>
                <Select
                  id="assignments"
                  options={assignments.map(assignment => ({ value: assignment.id, label: assignment.title }))}
                  value={selectedAssignment}
                  onChange={(selectedOption) => setSelectedAssignment(selectedOption)}
                  placeholder={t("select_assignment")}
                  isClearable
                />
              </div>
              <div className="form-group">
                <label htmlFor="class">{t("select_class")}</label>
                <Select
                  id="class"
                  options={classes.map(cls => ({ value: cls.id, label: cls.name }))}
                  value={selectedClass}
                  onChange={(selectedOption) => setSelectedClass(selectedOption)}
                  placeholder={t("select_class")}
                  isClearable
                />
              </div>
              <div className="form-group">
                <label htmlFor="students">{t("select_students")}</label>
                <Select
                  id="students"
                  options={students.map(student => ({ value: student.id, label: student.name }))}
                  value={selectedStudents}
                  onChange={(selectedOptions) => setSelectedStudents(selectedOptions)}
                  placeholder={t("select_students")}
                  isMulti
                />
              </div>
              <button className="assign-button" onClick={handleAssignAssignment}>{t("assign")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;

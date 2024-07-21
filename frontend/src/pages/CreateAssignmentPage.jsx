import React, { useState } from "react";
import Select from "react-select";
import { BiTask, BiListUl, BiUser, BiCalendar } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import "../styles/createAssignmentPage.css"; // Вашите стилове

const CreateAssignment = () => {
  const userRole = 'teacher'; // Актуализирайте според нуждите

  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [deadline, setDeadline] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState([]);

  const classes = [
    { id: 1, name: 'Math 101' },
    { id: 2, name: 'English Literature' },
    { id: 3, name: 'Physics Fundamentals' },
    // Добавете още класове, ако е необходимо
  ];

  const students = [
    { id: 1, name: 'Tom Brown' },
    { id: 2, name: 'Lucy White' },
    { id: 3, name: 'Emma Green' },
    // Добавете още ученици, ако е необходимо
  ];

  const handleCreateAssignment = () => {
    // Логика за създаване на задание
    console.log(`Created assignment: ${assignmentTitle}`);
    console.log(`Instructions: ${instructions}`);
    console.log(`Deadline: ${deadline}`);
    console.log(`Assigned to class: ${selectedClass ? selectedClass.name : "None"}`);
    console.log(`Assigned to students: ${selectedStudents.map(student => student.label).join(", ")}`);
  };

  return (
    <div className={`dashboard ${userRole === 'teacher' ? 'dashboard-teacher' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="create-assignment">
          <h2>Create Assignment</h2>

          <div className="assignment-form">
            <div className="assignment-form__section">
              <div className="assignment-form__header">
                <BiTask className="icon" />
                <h3>Assignment Details</h3>
              </div>

              <div className="form-group">
                <label htmlFor="assignment-title">Assignment Title</label>
                <input
                  type="text"
                  id="assignment-title"
                  value={assignmentTitle}
                  onChange={(e) => setAssignmentTitle(e.target.value)}
                  placeholder="Enter the title of the assignment"
                />
              </div>

              <div className="form-group assignment-form__instructions">
                <label htmlFor="instructions">Instructions</label>
                <textarea
                  id="instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="Provide instructions for the assignment"
                />
              </div>

              <div className="form-group">
                <label htmlFor="deadline">Deadline</label>
                <input
                  type="date"
                  id="deadline"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>
            </div>

            <div className="assignment-form__section">
              <div className="assignment-form__header">
                <BiListUl className="icon" />
                <h3>Assign to Class</h3>
              </div>
              <div className="form-group">
                <label htmlFor="class">Select Class</label>
                <Select
                  id="class"
                  options={classes.map(cls => ({ value: cls.id, label: cls.name }))}
                  value={selectedClass}
                  onChange={(selectedOption) => setSelectedClass(selectedOption)}
                  placeholder="Select Class"
                  isClearable
                />
              </div>
            </div>

            <div className="assignment-form__section">
              <div className="assignment-form__header">
                <BiUser className="icon" />
                <h3>Assign to Students</h3>
              </div>
              <div className="form-group">
                <label htmlFor="students">Select Students</label>
                <Select
                  id="students"
                  options={students.map(student => ({ value: student.id, label: student.name }))}
                  value={selectedStudents}
                  onChange={(selectedOptions) => setSelectedStudents(selectedOptions)}
                  placeholder="Select Students"
                  isMulti
                />
              </div>
            </div>

            <button onClick={handleCreateAssignment}>Create Assignment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;

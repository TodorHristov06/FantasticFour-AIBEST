// CreateAssignment.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/createAssignmentPage.css"; // Вашите стилове

const CreateAssignment = () => {
  const userRole = 'teacher'; // Актуализирайте според нуждите

  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [deadline, setDeadline] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);

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
    // Логика за създаване на задание
    console.log(`Created assignment: ${assignmentTitle}`);
    console.log(`Instructions: ${instructions}`);
    console.log(`Deadline: ${deadline}`);
    console.log(`Assigned to class: ${selectedClass}`);
    console.log(`Assigned to students: ${selectedStudents.join(", ")}`);
  };

  const handleStudentSelection = (event) => {
    const { options } = event.target;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setSelectedStudents(selected);
  };

  return (
    <div className={`dashboard ${userRole === 'teacher' ? 'dashboard-teacher' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="create-assignment">
          <h2>Create Assignment</h2>

          <div className="assignment-form">
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

            <div className="form-group">
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

            <div className="form-group">
              <label htmlFor="class">Select Class</label>
              <select
                id="class"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="">Select Class</option>
                {classes.map(cls => (
                  <option key={cls.id} value={cls.name}>{cls.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="students">Select Students</label>
              <select
                id="students"
                multiple
                value={selectedStudents}
                onChange={handleStudentSelection}
              >
                {students.map(student => (
                  <option key={student.id} value={student.name}>{student.name}</option>
                ))}
              </select>
            </div>

            <button onClick={handleCreateAssignment}>Create Assignment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;

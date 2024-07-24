import React, { useState } from "react";
import Select from "react-select";
import { BiTask, BiListUl, BiUser } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import "../styles/createAssignmentPage.css"; // Вашите стилове

const CreateAssignment = () => {
  const userRole = 'teacher'; // Актуализирайте според нуждите

  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [deadline, setDeadline] = useState("");
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
      setError("Deadline cannot be in the past.");
      return;
    }

    const newAssignment = {
      id: assignments.length + 1,
      title: assignmentTitle,
      instructions: instructions,
      deadline: deadline,
    };
    setAssignments([...assignments, newAssignment]);
    console.log(`Created assignment: ${assignmentTitle}`);
    console.log(`Instructions: ${instructions}`);
    console.log(`Deadline: ${deadline}`);
    setAssignmentTitle("");
    setInstructions("");
    setDeadline("");
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
          <h2>Create Assignment</h2>
          <div className="assignment-form">
            {/* Assignment Details */}
            <div className="assignment-details">
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
              {error && <p className="error">{error}</p>}
              <button onClick={handleCreateAssignment}>Create Assignment</button>
            </div>

            {/* Assign Assignment */}
            <div className="assign-assignment">
              <div className="assignment-form__header">
                <BiListUl className="icon" />
                <h3>Assign Assignment</h3>
              </div>
              <div className="form-group">
                <label htmlFor="assignments">Select Assignment</label>
                <Select
                  id="assignments"
                  options={assignments.map(assignment => ({ value: assignment.id, label: assignment.title }))}
                  value={selectedAssignment}
                  onChange={(selectedOption) => setSelectedAssignment(selectedOption)}
                  placeholder="Select Assignment"
                  isClearable
                />
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
              <button onClick={handleAssignAssignment}>Assign Assignment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;

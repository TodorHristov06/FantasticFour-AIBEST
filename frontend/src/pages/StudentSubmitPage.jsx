// src/pages/StudentSubmitPage.jsx

import React, { useState } from "react";
import Select from "react-select";
import { BiTask, BiListUl, BiUpload } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import "../styles/studentSubmitPage.css"; // Вашите стилове

const StudentSubmitPage = () => {
  const userRole = 'student'; // Ролята на потребителя

  const [assignmentFile, setAssignmentFile] = useState(null);
  const [description, setDescription] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = [
    { id: 1, name: 'Math 101' },
    { id: 2, name: 'English Literature' },
    { id: 3, name: 'Physics Fundamentals' },
  ];

  const handleFileChange = (event) => {
    setAssignmentFile(event.target.files[0]);
  };

  const handleSubmitAssignment = () => {
    // Логика за подаване на домашното
    console.log(`Submitted file: ${assignmentFile ? assignmentFile.name : "None"}`);
    console.log(`Description: ${description}`);
    console.log(`Submitted for class: ${selectedClass ? selectedClass.label : "None"}`);
  };

  return (
    <div className={`dashboard ${userRole === 'student' ? 'dashboard-student' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="submit-assignment">
          <h2>Submit Homework</h2>
          <div className="assignment-form">
            {/* Assignment Details */}
            <div className="assignment-details">
              <div className="assignment-form__header">
                <BiTask className="icon" />
                <h3>Assignment Details</h3>
              </div>
              <div className="form-group">
                <label htmlFor="assignment-file">Upload Assignment</label>
                <input
                  type="file"
                  id="assignment-file"
                  onChange={handleFileChange}
                  placeholder="Choose file to upload"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide a description for the assignment"
                />
              </div>
            </div>

            {/* Assign to Class */}
            <div className="assign-class">
              <div className="assignment-form__header">
                <BiListUl className="icon" />
                <h3>Select Class</h3>
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
          </div>

          <button onClick={handleSubmitAssignment}>Submit Assignment</button>
        </div>
      </div>
    </div>
  );
};

export default StudentSubmitPage;

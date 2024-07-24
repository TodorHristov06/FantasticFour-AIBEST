// src/pages/StudentSubmitPage.jsx

import React, { useState } from "react";
import Select from "react-select";
import { BiTask, BiUpload } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import "../styles/studentSubmitPage.css"; // Вашите стилове

const StudentSubmitPage = () => {
  const userRole = 'student'; // Ролята на потребителя

  const [googleDriveLink, setGoogleDriveLink] = useState("");
  const [comment, setComment] = useState("");
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const assignments = [
    { id: 1, title: "Homework 1", description: "Solve the equations and submit your solutions.", subject: "Math 101", deadline: "2024-07-31", maxPoints: 100 },
    { id: 2, title: "Essay", description: "Write an essay on the given topic.", subject: "English Literature", deadline: "2024-08-10", maxPoints: 50 },
    { id: 3, title: "Lab Report", description: "Submit your lab report for the experiment conducted.", subject: "Physics Fundamentals", deadline: "2024-08-05", maxPoints: 75 },
  ];

  const handleSubmitAssignment = () => {
    // Логика за подаване на домашното
    console.log(`Submitted Google Drive link: ${googleDriveLink}`);
    console.log(`Comment: ${comment}`);
    console.log(`Submitted for assignment: ${selectedAssignment ? selectedAssignment.label : "None"}`);
  };

  return (
    <div className={`dashboard ${userRole === 'student' ? 'dashboard-student' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="submit-assignment">
          <h2>Submit Homework</h2>
          <div className="assignment-form">
            {/* Select Assignment */}
            <div className="select-assignment">
              <div className="assignment-form__header">
                <BiTask className="icon" />
                <h3>Select Assignment</h3>
              </div>
              <div className="form-group">
                <label htmlFor="assignment">Assignment</label>
                <Select
                  id="assignment"
                  options={assignments.map(assignment => ({ value: assignment.id, label: assignment.title, details: assignment }))}
                  value={selectedAssignment}
                  onChange={(selectedOption) => setSelectedAssignment(selectedOption)}
                  placeholder="Select Assignment"
                  isClearable
                />
              </div>
            </div>

            {/* Assignment Details */}
            {selectedAssignment && (
              <div className="assignment-details">
                <div className="assignment-form__header">
                  <BiTask className="icon" />
                  <h3>Assignment Details</h3>
                </div>
                <div className="form-group">
                  <label>Assignment Title</label>
                  <input
                    type="text"
                    value={selectedAssignment.details.title}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={selectedAssignment.details.description}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    value={selectedAssignment.details.subject}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Deadline</label>
                  <input
                    type="date"
                    value={selectedAssignment.details.deadline}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Max Points</label>
                  <input
                    type="number"
                    value={selectedAssignment.details.maxPoints}
                    readOnly
                  />
                </div>
              </div>
            )}

            {/* Submit Assignment */}
            <div className="submit-assignment-details">
              <div className="assignment-form__header">
                <BiUpload className="icon" />
                <h3>Submit Assignment</h3>
              </div>
              <div className="form-group">
                <label htmlFor="google-drive-link">Google Drive Link</label>
                <input
                  type="text"
                  id="google-drive-link"
                  value={googleDriveLink}
                  onChange={(e) => setGoogleDriveLink(e.target.value)}
                  placeholder="Enter Google Drive link"
                />
              </div>
              <div className="form-group">
                <label htmlFor="comment">Comment</label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment"
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

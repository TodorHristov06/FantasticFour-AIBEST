import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Select from 'react-select'; // Уверете се, че сте инсталирали react-select
import '../styles/gradeAssignmentsPage.css';

const GradeAssignmentsPage = () => {
  const userRole = 'teacher';

  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [grade, setGrade] = useState("");
  const [feedback, setFeedback] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const [classSearch, setClassSearch] = useState("");
  const [studentSearch, setStudentSearch] = useState("");
  const [subjectSearch, setSubjectSearch] = useState("");

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

  const subjects = [
    { id: 1, name: 'Algebra' },
    { id: 2, name: 'Shakespeare' },
    { id: 3, name: 'Newtonian Mechanics' },
  ];

  const handleGradeSubmission = () => {
    if (!selectedClass || !selectedStudent || !selectedSubject || !grade) {
      setInfoMessage("Please select a class, student, subject, and provide a grade.");
      return;
    }

    const gradeIsValid = /^([1-6]|[0-9]{1,2}%)$/.test(grade);
    if (!gradeIsValid) {
      setInfoMessage("Grade must be a number from 1 to 6 or a percentage (e.g., 75%).");
      return;
    }

    setInfoMessage(`Successfully graded ${selectedStudent.label} in ${selectedClass.label} for ${selectedSubject.label} with grade: ${grade}`);
    setSelectedClass(null);
    setSelectedStudent(null);
    setSelectedSubject(null);
    setGrade("");
    setFeedback("");
  };

  return (
    <div className={`dashboard ${userRole === 'teacher' ? 'dashboard-teacher' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="grade-assignments">
          <h2>Grade Assignments</h2>
          <div className="grade-forms">
            {/* Класове */}
            <div className="grade-box">
              <h3>Select Class</h3>
              <Select
                options={classes.map(cls => ({ value: cls.id, label: cls.name }))}
                value={selectedClass}
                onChange={setSelectedClass}
                placeholder="Select Class"
                isClearable
                onInputChange={(value) => setClassSearch(value)}
                inputValue={classSearch}
              />
            </div>

            {/* Студенти */}
            <div className="grade-box">
              <h3>Select Student</h3>
              <Select
                options={students.map(student => ({ value: student.id, label: student.name }))}
                value={selectedStudent}
                onChange={setSelectedStudent}
                placeholder="Select Student"
                isClearable
                onInputChange={(value) => setStudentSearch(value)}
                inputValue={studentSearch}
              />
            </div>

            {/* Предмети */}
            <div className="grade-box">
              <h3>Select Subject</h3>
              <Select
                options={subjects.map(subject => ({ value: subject.id, label: subject.name }))}
                value={selectedSubject}
                onChange={setSelectedSubject}
                placeholder="Select Subject"
                isClearable
                onInputChange={(value) => setSubjectSearch(value)}
                inputValue={subjectSearch}
              />
            </div>
          </div>

          {/* Въвеждане на оценка и обратна връзка */}
          <div className="grade-entry">
            <h3>Enter Grade</h3>
            <input
              type="text"
              placeholder="Enter grade (1-6 or %)"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
            <textarea
              placeholder="Provide feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>

          {/* Извеждане на информация и действия */}
          <div className="assign-action">
            <div className="info-box">
              <h3>Selected Information</h3>
              <p>{infoMessage}</p>
              <button onClick={handleGradeSubmission}>Submit Grade</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeAssignmentsPage;

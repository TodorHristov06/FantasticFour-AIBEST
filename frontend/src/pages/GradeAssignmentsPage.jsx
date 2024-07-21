import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/gradeAssignmentsPage.css';

const GradeAssignmentsPage = () => {
  const userRole = 'teacher';

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
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
    // Добавете още класове тук
  ];

  const students = [
    { id: 1, name: 'Tom Brown' },
    { id: 2, name: 'Lucy White' },
    { id: 3, name: 'Emma Green' },
    // Добавете още студенти тук
  ];

  const subjects = [
    { id: 1, name: 'Algebra' },
    { id: 2, name: 'Shakespeare' },
    { id: 3, name: 'Newtonian Mechanics' },
    // Добавете още предмети тук
  ];

  const handleSearchChange = (type, e) => {
    if (type === 'class') setClassSearch(e.target.value);
    else if (type === 'student') setStudentSearch(e.target.value);
    else if (type === 'subject') setSubjectSearch(e.target.value);
  };

  const filteredClasses = classes.filter(cls =>
    cls.name.toLowerCase().includes(classSearch.toLowerCase())
  );

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(studentSearch.toLowerCase())
  );

  const filteredSubjects = subjects.filter(subject =>
    subject.name.toLowerCase().includes(subjectSearch.toLowerCase())
  );

  const handleSelect = (type, item) => {
    if (type === 'class') {
      setSelectedClass(item);
      setClassSearch('');
    } else if (type === 'student') {
      setSelectedStudent(item);
      setStudentSearch('');
    } else if (type === 'subject') {
      setSelectedSubject(item);
      setSubjectSearch('');
    }

    setInfoMessage(`Selected ${type}: ${item}`);
  };

  const handleGradeSubmission = () => {
    // Прост валидатор за входните данни
    if (!selectedClass || !selectedStudent || !selectedSubject || !grade) {
      setInfoMessage("Please select a class, student, subject, and provide a grade.");
      return;
    }

    // Проверка на формата на оценката
    const gradeIsValid = /^([1-6]|[0-9]{1,2}%)$/.test(grade);
    if (!gradeIsValid) {
      setInfoMessage("Grade must be a number from 1 to 6 or a percentage (e.g., 75%).");
      return;
    }

    setInfoMessage(`Successfully graded ${selectedStudent} in ${selectedClass} for ${selectedSubject} with grade: ${grade}`);
    // Изчистване на избраните стойности и полета за търсене
    setSelectedClass("");
    setSelectedStudent("");
    setSelectedSubject("");
    setGrade("");
    setFeedback("");
    setClassSearch("");
    setStudentSearch("");
    setSubjectSearch("");
  };

  return (
    <div className="dashboard dashboard-red">
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="grade-assignments">
          <h2>Grade Assignments</h2>
          <div className="grade-forms">
            {/* Класове */}
            <div className="grade-box">
              <h3>Select Class</h3>
              <input
                type="text"
                placeholder="Search Class..."
                value={classSearch}
                onChange={(e) => handleSearchChange('class', e)}
              />
              <ul className="dropdown-menu">
                {filteredClasses.map(cls => (
                  <li
                    key={cls.id}
                    onClick={() => handleSelect('class', cls.name)}
                    className={selectedClass === cls.name ? 'active' : ''}
                  >
                    {cls.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Студенти */}
            <div className="grade-box">
              <h3>Select Student</h3>
              <input
                type="text"
                placeholder="Search Student..."
                value={studentSearch}
                onChange={(e) => handleSearchChange('student', e)}
              />
              <ul className="dropdown-menu">
                {filteredStudents.map(student => (
                  <li
                    key={student.id}
                    onClick={() => handleSelect('student', student.name)}
                    className={selectedStudent === student.name ? 'active' : ''}
                  >
                    {student.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Предмети */}
            <div className="grade-box">
              <h3>Select Subject</h3>
              <input
                type="text"
                placeholder="Search Subject..."
                value={subjectSearch}
                onChange={(e) => handleSearchChange('subject', e)}
              />
              <ul className="dropdown-menu">
                {filteredSubjects.map(subject => (
                  <li
                    key={subject.id}
                    onClick={() => handleSelect('subject', subject.name)}
                    className={selectedSubject === subject.name ? 'active' : ''}
                  >
                    {subject.name}
                  </li>
                ))}
              </ul>
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

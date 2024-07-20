import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/assignClassesPage.css';

const AssignClassesPage = () => {
  const userRole = 'admin';

  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const [teacherSearch, setTeacherSearch] = useState("");
  const [studentSearch, setStudentSearch] = useState("");
  const [classSearch, setClassSearch] = useState("");

  const teachers = [
    { id: 1, name: 'Jane Smith' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Alice Johnson' },
    // Добавете много повече учители тук
  ];

  const students = [
    { id: 1, name: 'Tom Brown' },
    { id: 2, name: 'Lucy White' },
    { id: 3, name: 'Emma Green' },
    // Добавете много повече студенти тук
  ];

  const classes = [
    { id: 1, name: 'Math 101' },
    { id: 2, name: 'English Literature' },
    { id: 3, name: 'Physics Fundamentals' },
    // Добавете много повече класове тук
  ];

  const handleSearchChange = (type, e) => {
    if (type === 'teacher') setTeacherSearch(e.target.value);
    else if (type === 'student') setStudentSearch(e.target.value);
    else if (type === 'class') setClassSearch(e.target.value);
  };

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(teacherSearch.toLowerCase())
  );

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(studentSearch.toLowerCase())
  );

  const filteredClasses = classes.filter(cls =>
    cls.name.toLowerCase().includes(classSearch.toLowerCase())
  );

  const handleSelect = (type, item) => {
    if (type === 'teacher') {
      setSelectedTeacher(item);
      setTeacherSearch('');
    } else if (type === 'student') {
      setSelectedStudent(item);
      setStudentSearch('');
    } else if (type === 'class') {
      setSelectedClass(item);
      setClassSearch('');
    }

    setInfoMessage(`Selected ${type}: ${item}`);
  };

  const handleAssign = () => {
    if (selectedTeacher && selectedStudent && selectedClass) {
      console.log(`Assigned ${selectedStudent} to ${selectedClass} with ${selectedTeacher}`);
      setInfoMessage(`Successfully assigned ${selectedStudent} to ${selectedClass} with ${selectedTeacher}`);
    } else {
      setInfoMessage("Please select a teacher, student, and class.");
    }
  };

  return (
    <div className="dashboard dashboard-red">
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="assign-classes">
          <h2>Assign Classes</h2>
          <div className="assign-forms">
            {/* Преподаватели */}
            <div className="assign-box">
              <h3>Select Teacher</h3>
              <input
                type="text"
                placeholder="Search Teacher..."
                value={teacherSearch}
                onChange={(e) => handleSearchChange('teacher', e)}
              />
              <ul className="dropdown-menu">
                {filteredTeachers.map(teacher => (
                  <li
                    key={teacher.id}
                    onClick={() => handleSelect('teacher', teacher.name)}
                    className={selectedTeacher === teacher.name ? 'active' : ''}
                  >
                    {teacher.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Студенти */}
            <div className="assign-box">
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

            {/* Класове */}
            <div className="assign-box">
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

            {/* Извеждане на информация и действия */}
            <div className="assign-action">
              <div className="info-box">
                <h3>Selected Information</h3>
                <p>{infoMessage}</p>
                <button onClick={handleAssign}>Assign Class</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignClassesPage;

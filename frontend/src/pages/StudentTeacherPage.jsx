import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/studentTeacherPage.css';

const StudentTeacherPage = () => {
  const userRole = 'teacher';

  const [teacher, setTeacher] = useState(null);
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [studentSearch, setStudentSearch] = useState('');
  const [classSearch, setClassSearch] = useState('');

  useEffect(() => {
    // Примерни данни
    const fetchedTeacher = { id: 1, name: 'John Doe' };
    const fetchedStudents = [
      { id: 1, name: 'Tom Brown', classId: 1 },
      { id: 2, name: 'Lucy White', classId: 2 },
    ];
    const fetchedClasses = [
      { id: 1, name: 'Math 101' },
      { id: 2, name: 'English Literature' },
    ];
    const fetchedAssignments = [
      { id: 1, classId: 1, title: 'Math Homework 1', description: 'Complete exercises 1-10' },
      { id: 2, classId: 2, title: 'English Essay', description: 'Write an essay on Shakespeare' },
    ];

    setTeacher(fetchedTeacher);
    setStudents(fetchedStudents);
    setClasses(fetchedClasses);
    setAssignments(fetchedAssignments);
  }, []);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(studentSearch.toLowerCase())
  );

  const filteredClasses = classes.filter(cls =>
    cls.name.toLowerCase().includes(classSearch.toLowerCase())
  );

  const groupedAssignments = classes.map(cls => ({
    class: cls.name,
    assignments: assignments.filter(a => a.classId === cls.id),
  }));

  return (
    <div className="dashboard dashboard-teacher">
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="student-teacher-page">
          <h2>Welcome, {teacher?.name}</h2>
          
          {/* Поле за търсене на студенти */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search students..."
              value={studentSearch}
              onChange={(e) => setStudentSearch(e.target.value)}
            />
            <button onClick={() => setStudentSearch('')}>Clear</button>
          </div>

          <div className="student-list">
            <h3>Students</h3>
            {filteredStudents.length > 0 ? (
              filteredStudents.map(student => (
                <div key={student.id} className="student-item">
                  {student.name}
                </div>
              ))
            ) : (
              <p>No students found.</p>
            )}
          </div>

          {/* Поле за търсене на класове */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search classes..."
              value={classSearch}
              onChange={(e) => setClassSearch(e.target.value)}
            />
            <button onClick={() => setClassSearch('')}>Clear</button>
          </div>

          <div className="class-list">
            <h3>Classes</h3>
            {filteredClasses.length > 0 ? (
              filteredClasses.map(cls => (
                <div key={cls.id} className="class-item">
                  {cls.name}
                </div>
              ))
            ) : (
              <p>No classes found.</p>
            )}
          </div>

          <div className="assignment-groups">
            {groupedAssignments.length > 0 ? (
              groupedAssignments.map((group, index) => (
                <div key={index} className="assignment-group">
                  <h3>{group.class}</h3>
                  <ul>
                    {group.assignments.length > 0 ? (
                      group.assignments.map(assignment => (
                        <li key={assignment.id}>
                          <strong>{assignment.title}</strong>: {assignment.description}
                        </li>
                      ))
                    ) : (
                      <li>No assignments available.</li>
                    )}
                  </ul>
                </div>
              ))
            ) : (
              <p>No assignments available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTeacherPage;

import React, { useState } from 'react';
import Select from 'react-select';
import Sidebar from '../components/Sidebar';
import '../styles/assignClassesPage.css';

const AssignClassesPage = () => {
  const userRole = 'admin';
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newClassName, setNewClassName] = useState('');
  const [activeBox, setActiveBox] = useState(null);
  const [infoMessage, setInfoMessage] = useState("");
  const [language, setLanguage] = useState('en'); // State for language

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'bg', label: 'Bulgarian' }
  ];

  const teachers = [
    { id: 1, name: 'Jane Smith' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Alice Johnson' },
    // Add more teachers here
  ];

  const subjects = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Science' },
    // Add more subjects here
  ];

  const classes = [
    { id: 1, name: 'Math 101' },
    { id: 2, name: 'English Literature' },
    { id: 3, name: 'Physics Fundamentals' },
    // Add more classes here
  ];

  const students = [
    { id: 1, name: 'Tom Brown' },
    { id: 2, name: 'Lucy White' },
    { id: 3, name: 'Emma Green' },
    // Add more students here
  ];

  const handleSelect = (type, selectedOption) => {
    if (type === 'teacher') {
      setSelectedTeacher(selectedOption);
    } else if (type === 'subject') {
      setSelectedSubject(selectedOption);
    } else if (type === 'class') {
      setSelectedClass(selectedOption);
    } else if (type === 'student') {
      setSelectedStudent(selectedOption);
    }

    setInfoMessage(`Selected ${type}: ${selectedOption ? selectedOption.label : 'None'}`);
  };

  const handleAssign = () => {
    if (activeBox === 'teacher' && selectedTeacher && selectedSubject && selectedClass) {
      setInfoMessage(`Successfully assigned ${selectedSubject.label} to ${selectedClass.label} with ${selectedTeacher.label}`);
      // Clear selected values
      setSelectedTeacher(null);
      setSelectedSubject(null);
      setSelectedClass(null);
    } else if (activeBox === 'student' && selectedStudent && selectedClass) {
      setInfoMessage(`Successfully assigned ${selectedStudent.label} to ${selectedClass.label}`);
      // Clear selected values
      setSelectedStudent(null);
      setSelectedClass(null);
    } else if (activeBox === 'classes' && newClassName) {
      setInfoMessage(`Successfully added new class: ${newClassName}`);
      // Clear the new class name
      setNewClassName('');
    } else {
      setInfoMessage("Please select the required fields or enter a class name.");
    }
  };

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption.value);
  };

  return (
    <div className="dashboard dashboard-red">
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="assign-classes">
          <div className="header-container">
            <h2>{language === 'en' ? 'Assign Classes' : 'Разпределяне на Класове'}</h2>
            <Select
              options={languageOptions}
              value={languageOptions.find(option => option.value === language)}
              onChange={handleLanguageChange}
              className="language-dropdown"
              classNamePrefix="react-select"
            />
          </div>

          <div className="info-boxes">
            <div className="info-box" onClick={() => setActiveBox('teacher')}>
              <h3>{language === 'en' ? 'Teacher' : 'Учител'}</h3>
              <p>{language === 'en' ? 'Manage teacher assignments here.' : 'Управлявайте разпределението на учители тук.'}</p>
            </div>
            <div className="info-box" onClick={() => setActiveBox('student')}>
              <h3>{language === 'en' ? 'Student' : 'Студент'}</h3>
              <p>{language === 'en' ? 'Manage student assignments here.' : 'Управлявайте разпределението на студенти тук.'}</p>
            </div>
            <div className="info-box" onClick={() => setActiveBox('classes')}>
              <h3>{language === 'en' ? 'Classes' : 'Класове'}</h3>
              <p>{language === 'en' ? 'Manage classes here.' : 'Управлявайте класовете тук.'}</p>
            </div>
          </div>

          <div className="assign-forms">
            {activeBox === 'teacher' && (
              <div className="assign-box">
                <h3>{language === 'en' ? 'Select Teacher' : 'Изберете Учител'}</h3>
                <Select
                  options={teachers.map(teacher => ({ value: teacher.id, label: teacher.name }))}
                  value={selectedTeacher}
                  onChange={(option) => handleSelect('teacher', option)}
                  placeholder={language === 'en' ? 'Select Teacher' : 'Изберете Учител'}
                  isClearable
                />
                <h3>{language === 'en' ? 'Select Subject' : 'Изберете Предмет'}</h3>
                <Select
                  options={subjects.map(subject => ({ value: subject.id, label: subject.name }))}
                  value={selectedSubject}
                  onChange={(option) => handleSelect('subject', option)}
                  placeholder={language === 'en' ? 'Select Subject' : 'Изберете Предмет'}
                  isClearable
                />
                <h3>{language === 'en' ? 'Select Class' : 'Изберете Клас'}</h3>
                <Select
                  options={classes.map(cls => ({ value: cls.id, label: cls.name }))}
                  value={selectedClass}
                  onChange={(option) => handleSelect('class', option)}
                  placeholder={language === 'en' ? 'Select Class' : 'Изберете Клас'}
                  isClearable
                />
                <div className="info-box">
                  <h3>{language === 'en' ? 'Selected Information' : 'Избрана Информация'}</h3>
                  <p>{infoMessage}</p>
                  <button onClick={handleAssign}>{language === 'en' ? 'Assign Class' : 'Разпределете Клас'}</button>
                </div>
              </div>
            )}

            {activeBox === 'student' && (
              <div className="assign-box">
                <h3>{language === 'en' ? 'Select Student' : 'Изберете Студент'}</h3>
                <Select
                  options={students.map(student => ({ value: student.id, label: student.name }))}
                  value={selectedStudent}
                  onChange={(option) => handleSelect('student', option)}
                  placeholder={language === 'en' ? 'Select Student' : 'Изберете Студент'}
                  isClearable
                />
                <h3>{language === 'en' ? 'Select Class' : 'Изберете Клас'}</h3>
                <Select
                  options={classes.map(cls => ({ value: cls.id, label: cls.name }))}
                  value={selectedClass}
                  onChange={(option) => handleSelect('class', option)}
                  placeholder={language === 'en' ? 'Select Class' : 'Изберете Клас'}
                  isClearable
                />
                <div className="info-box">
                  <h3>{language === 'en' ? 'Selected Information' : 'Избрана Информация'}</h3>
                  <p>{infoMessage}</p>
                  <button onClick={handleAssign}>{language === 'en' ? 'Assign Class' : 'Разпределете Клас'}</button>
                </div>
              </div>
            )}

            {activeBox === 'classes' && (
              <div className="assign-box">
                <h3>{language === 'en' ? 'Enter New Class Name' : 'Въведете Име на Нов Клас'}</h3>
                <input
                  type="text"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  placeholder={language === 'en' ? 'Class Name' : 'Име на Клас'}
                />
                <div className="info-box">
                  <h3>{language === 'en' ? 'Selected Information' : 'Избрана Информация'}</h3>
                  <p>{infoMessage}</p>
                  <button onClick={handleAssign}>{language === 'en' ? 'Add Class' : 'Добавете Клас'}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignClassesPage;

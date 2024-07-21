import React, { useState } from 'react';
import Select from 'react-select';
import Sidebar from '../components/Sidebar';
import '../styles/assignClassesPage.css';

const AssignClassesPage = () => {
  const userRole = 'admin';
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
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

  const handleSelect = (type, selectedOption) => {
    if (type === 'teacher') {
      setSelectedTeacher(selectedOption);
    } else if (type === 'student') {
      setSelectedStudent(selectedOption);
    } else if (type === 'class') {
      setSelectedClass(selectedOption);
    }

    setInfoMessage(`Selected ${type}: ${selectedOption ? selectedOption.label : 'None'}`);
  };

  const handleAssign = () => {
    if (selectedTeacher && selectedStudent && selectedClass) {
      setInfoMessage(`Successfully assigned ${selectedStudent.label} to ${selectedClass.label} with ${selectedTeacher.label}`);
      // Изчистване на избраните стойности
      setSelectedTeacher(null);
      setSelectedStudent(null);
      setSelectedClass(null);
    } else {
      setInfoMessage("Please select a teacher, student, and class.");
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
          <div className="assign-forms">
            {/* Преподаватели */}
            <div className="assign-box">
              <h3>{language === 'en' ? 'Select Teacher' : 'Изберете Учител'}</h3>
              <Select
                options={teachers.map(teacher => ({ value: teacher.id, label: teacher.name }))}
                value={selectedTeacher}
                onChange={(option) => handleSelect('teacher', option)}
                placeholder={language === 'en' ? 'Select Teacher' : 'Изберете Учител'}
                isClearable
              />
            </div>

            {/* Студенти */}
            <div className="assign-box">
              <h3>{language === 'en' ? 'Select Student' : 'Изберете Студент'}</h3>
              <Select
                options={students.map(student => ({ value: student.id, label: student.name }))}
                value={selectedStudent}
                onChange={(option) => handleSelect('student', option)}
                placeholder={language === 'en' ? 'Select Student' : 'Изберете Студент'}
                isClearable
              />
            </div>

            {/* Класове */}
            <div className="assign-box">
              <h3>{language === 'en' ? 'Select Class' : 'Изберете Клас'}</h3>
              <Select
                options={classes.map(cls => ({ value: cls.id, label: cls.name }))}
                value={selectedClass}
                onChange={(option) => handleSelect('class', option)}
                placeholder={language === 'en' ? 'Select Class' : 'Изберете Клас'}
                isClearable
              />
            </div>
          </div>

          {/* Извеждане на информация и действия */}
          <div className="assign-action">
            <div className="info-box">
              <h3>{language === 'en' ? 'Selected Information' : 'Избрана Информация'}</h3>
              <p>{infoMessage}</p>
              <button onClick={handleAssign}>{language === 'en' ? 'Assign Class' : 'Разпределете Клас'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignClassesPage;

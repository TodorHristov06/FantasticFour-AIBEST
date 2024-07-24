// src/pages/AssignClassesPage.jsx

import React, { useState } from 'react';
import Select from 'react-select';
import Sidebar from '../components/Sidebar';
import '../styles/assignClassesPage.css';
import { useTranslation } from 'react-i18next';

const AssignClassesPage = () => {
  const userRole = 'admin';
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newClassName, setNewClassName] = useState('');
  const [activeBox, setActiveBox] = useState(null);
  const [infoMessage, setInfoMessage] = useState("");
  const { t } = useTranslation();

  const teachers = [
    { id: 1, name: 'Jane Smith' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Alice Johnson' },
  ];

  const subjects = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Science' },
  ];

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

    setInfoMessage(t(`Selected ${type}: ${selectedOption ? selectedOption.label : 'None'}`));
  };

  const handleAssign = () => {
    if (activeBox === 'teacher' && selectedTeacher && selectedSubject && selectedClass) {
      setInfoMessage(t('successfullyAssignedTeacher', {
        subject: selectedSubject.label,
        class: selectedClass.label,
        teacher: selectedTeacher.label
      }));
      setSelectedTeacher(null);
      setSelectedSubject(null);
      setSelectedClass(null);
    } else if (activeBox === 'student' && selectedStudent && selectedClass) {
      setInfoMessage(t('successfullyAssignedStudent', {
        student: selectedStudent.label,
        class: selectedClass.label
      }));
      setSelectedStudent(null);
      setSelectedClass(null);
    } else if (activeBox === 'classes' && newClassName) {
      setInfoMessage(t('successfullyAddedClass', { class: newClassName }));
      setNewClassName('');
    } else {
      setInfoMessage(t('pleaseSelectFields'));
    }
  };

  const handleSectionClick = (section) => {
    setActiveBox(section);
    setInfoMessage('');
  };

  return (
    <div className="dashboard dashboard-red">
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="assign-classes">
          <div className="header-container">
            <h2>{t('assignClasses')}</h2>
          </div>

          <div className="info-boxes">
            <div
              className={`info-box ${activeBox === 'teacher' ? 'active' : ''}`}
              onClick={() => handleSectionClick('teacher')}
            >
              <h3>{t('teacher')}</h3>
              <p>{t('manageTeacherAssignments')}</p>
            </div>
            <div
              className={`info-box ${activeBox === 'student' ? 'active' : ''}`}
              onClick={() => handleSectionClick('student')}
            >
              <h3>{t('student')}</h3>
              <p>{t('manageStudentAssignments')}</p>
            </div>
            <div
              className={`info-box ${activeBox === 'classes' ? 'active' : ''}`}
              onClick={() => handleSectionClick('classes')}
            >
              <h3>{t('classes')}</h3>
              <p>{t('manageClasses')}</p>
            </div>
          </div>

          <div className="assign-forms">
            {activeBox === 'teacher' && (
              <div className="assign-box">
                <h3>{t('selectTeacher')}</h3>
                <Select
                  options={teachers.map(teacher => ({ value: teacher.id, label: teacher.name }))}
                  value={selectedTeacher}
                  onChange={(option) => handleSelect('teacher', option)}
                  placeholder={t('selectTeacher')}
                  isClearable
                />
                <h3>{t('selectSubject')}</h3>
                <Select
                  options={subjects.map(subject => ({ value: subject.id, label: subject.name }))}
                  value={selectedSubject}
                  onChange={(option) => handleSelect('subject', option)}
                  placeholder={t('selectSubject')}
                  isClearable
                />
                <h3>{t('selectClass')}</h3>
                <Select
                  options={classes.map(cls => ({ value: cls.id, label: cls.name }))}
                  value={selectedClass}
                  onChange={(option) => handleSelect('class', option)}
                  placeholder={t('selectClass')}
                  isClearable
                />
                <div className="info-box">
                  <h3>{t('selectedInformation')}</h3>
                  <p>{infoMessage}</p>
                  <button onClick={handleAssign}>{t('assignClass')}</button>
                </div>
              </div>
            )}

            {activeBox === 'student' && (
              <div className="assign-box">
                <h3>{t('selectStudent')}</h3>
                <Select
                  options={students.map(student => ({ value: student.id, label: student.name }))}
                  value={selectedStudent}
                  onChange={(option) => handleSelect('student', option)}
                  placeholder={t('selectStudent')}
                  isClearable
                />
                <h3>{t('selectClass')}</h3>
                <Select
                  options={classes.map(cls => ({ value: cls.id, label: cls.name }))}
                  value={selectedClass}
                  onChange={(option) => handleSelect('class', option)}
                  placeholder={t('selectClass')}
                  isClearable
                />
                <div className="info-box">
                  <h3>{t('selectedInformation')}</h3>
                  <p>{infoMessage}</p>
                  <button onClick={handleAssign}>{t('assignClass')}</button>
                </div>
              </div>
            )}

            {activeBox === 'classes' && (
              <div className="assign-box">
                <h3>{t('enterNewClassName')}</h3>
                <input
                  type="text"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  placeholder={t('className')}
                />
                <div className="info-box">
                  <h3>{t('selectedInformation')}</h3>
                  <p>{infoMessage}</p>
                  <button onClick={handleAssign}>{t('addClass')}</button>
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

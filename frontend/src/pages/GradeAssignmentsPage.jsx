import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import FileDownloadButton from '../components/FileDownloadButton'; // Импорт на новия компонент
import '../styles/gradeAssignmentsPage.css';

const GradeAssignmentsPage = () => {
  const { t } = useTranslation();
  const userRole = 'teacher';

  const [assignments, setAssignments] = useState([
    { id: 1, student: 'Tom Brown', class: 'Math 101', subject: 'Algebra', assignment: 'Homework 1', deadline: '2023-12-20', grade: '', status: 'Not Submitted', description: 'Solve problems 1 to 5', file: '' },
    { id: 2, student: 'Lucy White', class: 'English Literature', subject: 'Shakespeare', assignment: 'Essay 1', deadline: '2023-12-21', grade: '', status: 'Submitted', description: 'Write an essay on Hamlet', file: 'essay1.pdf' },
    { id: 3, student: 'Emma Green', class: 'Physics Fundamentals', subject: 'Newtonian Mechanics', assignment: 'Lab Report 1', deadline: '2023-12-22', grade: '', status: 'Not Submitted', description: 'Complete the lab report', file: '' },
    { id: 4, student: 'John Doe', class: 'Biology 102', subject: 'Genetics', assignment: 'Homework 2', deadline: '2023-12-23', grade: '', status: 'Submitted', description: 'Answer questions 1 to 10', file: 'homework2.pdf' },
    { id: 5, student: 'Jane Smith', class: 'Chemistry 101', subject: 'Organic Chemistry', assignment: 'Project 1', deadline: '2023-12-24', grade: '', status: 'Not Submitted', description: 'Prepare a presentation on hydrocarbons', file: '' },
    { id: 6, student: 'Mark Johnson', class: 'History 101', subject: 'Ancient Civilizations', assignment: 'Essay 2', deadline: '2023-12-25', grade: '', status: 'Submitted', description: 'Write an essay on Ancient Egypt', file: 'essay2.pdf' },
    { id: 7, student: 'Emily Davis', class: 'Math 101', subject: 'Geometry', assignment: 'Homework 3', deadline: '2023-12-26', grade: '', status: 'Not Submitted', description: 'Solve problems 6 to 10', file: '' },
    { id: 8, student: 'Michael Brown', class: 'English Literature', subject: 'Modern Poetry', assignment: 'Essay 3', deadline: '2023-12-27', grade: '', status: 'Submitted', description: 'Analyze a poem by T.S. Eliot', file: 'essay3.pdf' },
    { id: 9, student: 'Sarah Wilson', class: 'Physics Fundamentals', subject: 'Thermodynamics', assignment: 'Lab Report 2', deadline: '2023-12-28', grade: '', status: 'Not Submitted', description: 'Complete the thermodynamics lab', file: '' },
    { id: 10, student: 'Chris Taylor', class: 'Biology 102', subject: 'Evolution', assignment: 'Homework 4', deadline: '2023-12-29', grade: '', status: 'Submitted', description: 'Discuss the theory of evolution', file: 'homework4.pdf' },
    { id: 11, student: 'Anna Lee', class: 'Chemistry 101', subject: 'Inorganic Chemistry', assignment: 'Project 2', deadline: '2023-12-30', grade: '', status: 'Not Submitted', description: 'Research on metal complexes', file: '' },
    { id: 12, student: 'David Clark', class: 'History 101', subject: 'Medieval Europe', assignment: 'Essay 4', deadline: '2023-12-31', grade: '', status: 'Submitted', description: 'Write an essay on the feudal system', file: 'essay4.pdf' },
    { id: 13, student: 'Sophia Martinez', class: 'Math 101', subject: 'Calculus', assignment: 'Homework 5', deadline: '2024-01-01', grade: '', status: 'Not Submitted', description: 'Solve integrals from the worksheet', file: '' },
    { id: 14, student: 'James Anderson', class: 'English Literature', subject: 'Renaissance Literature', assignment: 'Essay 5', deadline: '2024-01-02', grade: '', status: 'Submitted', description: 'Compare works by Dante and Chaucer', file: 'essay5.pdf' },
  ]);

  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [filterSubmitted, setFilterSubmitted] = useState('all');
  const [filterGraded, setFilterGraded] = useState('all');
  const [sortCriteria, setSortCriteria] = useState('none');

  const handleAssignmentClick = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const handleGradeChange = (event) => {
    const grade = event.target.value;
    const updatedAssignment = { ...selectedAssignment, grade };
    setSelectedAssignment(updatedAssignment);
  };

  const handleTeacherCommentChange = (event) => {
    const comment = event.target.value;
    const updatedAssignment = { ...selectedAssignment, teacherComment: comment };
    setSelectedAssignment(updatedAssignment);
  };

  const handleSave = () => {
    setAssignments(assignments.map(assignment =>
      assignment.id === selectedAssignment.id ? selectedAssignment : assignment
    ));
    setSelectedAssignment(null);
  };

  const handleCloseDetails = () => {
    setSelectedAssignment(null);
  };

  const convertGrade = (grade) => {
    if (!grade) return t('not_graded');
    const percent = parseInt(grade.replace('%', ''), 10);
    if (percent >= 90) return 6;
    if (percent >= 75) return 5;
    if (percent >= 60) return 4;
    if (percent >= 45) return 3;
    return 2;
  };

  const filteredAssignments = assignments.filter(assignment => {
    if (filterSubmitted === 'submitted' && assignment.status !== 'Submitted') return false;
    if (filterSubmitted === 'notSubmitted' && assignment.status !== 'Not Submitted') return false;
    if (filterGraded === 'graded' && !assignment.grade) return false;
    if (filterGraded === 'notGraded' && assignment.grade) return false;
    return true;
  });

  const sortedAssignments = [...filteredAssignments].sort((a, b) => {
    switch (sortCriteria) {
      case 'deadline':
        return new Date(a.deadline) - new Date(b.deadline);
      case 'student':
        return a.student.localeCompare(b.student);
      default:
        return 0;
    }
  });

  return (
    <div className={`dashboard ${userRole === 'teacher' ? 'dashboard-teacher' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="grade-assignments">
          <h2>{t('grade_assignments')}</h2>
          
          <div className="filter-buttons">
            <button onClick={() => setFilterSubmitted(filterSubmitted === 'all' ? 'submitted' : 'all')}>
              {filterSubmitted === 'all' ? t('show_submitted') : t('show_all')}
            </button>
            <button onClick={() => setFilterGraded(filterGraded === 'all' ? 'graded' : 'all')}>
              {filterGraded === 'all' ? t('show_graded') : t('show_all')}
            </button>
          </div>

          <div className="sort-buttons">
            <button onClick={() => setSortCriteria('deadline')}>
              {t('sort_by_deadline')}
            </button>
            <button onClick={() => setSortCriteria('student')}>
              {t('sort_by_student')}
            </button>
            <button onClick={() => setSortCriteria('none')}>
              {t('clear_sorting')}
            </button>
          </div>

          <table>
            <thead>
              <tr>
                <th>{t('student')}</th>
                <th>{t('class')}</th>
                <th>{t('subject')}</th>
                <th>{t('assignment')}</th>
                <th>{t('deadline')}</th>
                <th>{t('grade')}</th>
              </tr>
            </thead>
            <tbody>
              {sortedAssignments.map(assignment => (
                <tr key={assignment.id}>
                  <td>{assignment.student}</td>
                  <td>{assignment.class}</td>
                  <td>{assignment.subject}</td>
                  <td>
                    <button className="assignment-button" onClick={() => handleAssignmentClick(assignment)}>
                      {assignment.assignment}
                    </button>
                  </td>
                  <td>{assignment.deadline}</td>
                  <td>{convertGrade(assignment.grade)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {selectedAssignment && (
            <div className="assignment-details">
              <button className="close-button" onClick={handleCloseDetails}>X</button>
              <h3>{t('assignment_details')}</h3>
              <div className="assignment-details-content">
                <div className="left-section">
                  <h4>{t('student')}: {selectedAssignment.student}</h4>
                  <h4>{t('assignment')}: {selectedAssignment.assignment}</h4>
                  <p>{t('description')}: {selectedAssignment.description}</p>
                  <h4>{t('student_comment')}</h4>
                  <p>{selectedAssignment.studentComment || t('no_comment')}</p>
                </div>
                <div className="right-section">
                  <h4>{t('class')}: {selectedAssignment.class}</h4>
                  <h4>{t('subject')}: {selectedAssignment.subject}</h4>
                  {selectedAssignment.file ? (
                    <FileDownloadButton 
                      fileName={selectedAssignment.file}
                      fileUrl={`/path/to/files/${selectedAssignment.file}`}
                    />
                  ) : (
                    <p>{t('file_uploaded')}</p>
                  )}
                  <div className="grade-entry">
                    <h4>{t('grade_entry')}</h4>
                    <input
                      type="text"
                      placeholder={t('enter_grade')}
                      value={selectedAssignment.grade}
                      onChange={handleGradeChange}
                    />
                  </div>
                  {userRole === 'teacher' && (
                    <div className="comment-section">
                      <h4>{t('teacher_comment')}</h4>
                      <textarea
                        placeholder={t('add_comment')}
                        value={selectedAssignment.teacherComment || ''}
                        onChange={handleTeacherCommentChange}
                      />
                    </div>
                  )}
                </div>
              </div>
              <button className="save-button" onClick={handleSave}>{t('save')}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GradeAssignmentsPage;

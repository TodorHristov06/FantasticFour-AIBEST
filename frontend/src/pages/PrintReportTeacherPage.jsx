import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/printReportTeacherPage.css";

const PrintReportTeacherPage = () => {
  const userRole = 'teacher';

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [report, setReport] = useState("");
  const [studentSearch, setStudentSearch] = useState("");
  const [periodSearch, setPeriodSearch] = useState("");

  const students = [
    { id: 1, name: 'Tom Brown' },
    { id: 2, name: 'Lucy White' },
    { id: 3, name: 'Emma Green' },
    // Добавете много повече студенти тук
  ];

  const periods = [
    { id: 1, period: 'Q1 2024' },
    { id: 2, period: 'Q2 2024' },
    { id: 3, period: 'Q3 2024' },
    // Добавете много повече периоди тук
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(studentSearch.toLowerCase())
  );

  const filteredPeriods = periods.filter(period =>
    period.period.toLowerCase().includes(periodSearch.toLowerCase())
  );

  const handlePrintReport = () => {
    if (!selectedStudent || !selectedPeriod) {
      alert("Please select both student and period.");
      return;
    }
    
    // Симулиране на генериране на отчет
    setReport(`Report for ${selectedStudent.name} for ${selectedPeriod.period}`);
    
    // Изчистване на избраните стойности и полета за търсене
    setSelectedStudent(null);
    setSelectedPeriod(null);
    setStudentSearch("");
    setPeriodSearch("");
  };

  return (
    <div className={`dashboard ${userRole === 'teacher' ? 'dashboard-teacher' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="print-report-teacher">
          <h2>Print Report</h2>

          <div className="report-form">
            {/* Select Student */}
            <div className="select-box">
              <h3>Select Student</h3>
              <input
                type="text"
                placeholder="Search Student..."
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
              />
              <ul className="dropdown-menu">
                {filteredStudents.map(student => (
                  <li
                    key={student.id}
                    onClick={() => setSelectedStudent(student)}
                    className={selectedStudent?.id === student.id ? 'active' : ''}
                  >
                    {student.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Select Period */}
            <div className="select-box">
              <h3>Select Period</h3>
              <input
                type="text"
                placeholder="Search Period..."
                value={periodSearch}
                onChange={(e) => setPeriodSearch(e.target.value)}
              />
              <ul className="dropdown-menu">
                {filteredPeriods.map(period => (
                  <li
                    key={period.id}
                    onClick={() => setSelectedPeriod(period)}
                    className={selectedPeriod?.id === period.id ? 'active' : ''}
                  >
                    {period.period}
                  </li>
                ))}
              </ul>
            </div>

            <button onClick={handlePrintReport}>Print Report</button>

            {report && (
              <div className="report-results">
                <h3>Report Results</h3>
                <p>{report}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintReportTeacherPage;
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/printReportTeacherPage.css";

const PrintReportTeacherPage = () => {
  const userRole = 'teacher';

  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");

  const students = [
    { id: 1, name: 'Tom Brown' },
    { id: 2, name: 'Lucy White' },
    { id: 3, name: 'Emma Green' },
  ];

  const periods = [
    { id: 1, period: 'Q1 2024' },
    { id: 2, period: 'Q2 2024' },
    { id: 3, period: 'Q3 2024' },
  ];

  const handlePrintReport = () => {
    // Логика за принтиране на отчети
    console.log(`Printing report for ${selectedStudent} for ${selectedPeriod}`);
  };

  return (
    <div className={`dashboard ${userRole === 'teacher' ? 'dashboard-teacher' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="print-report-teacher">
          <h2>Print Report</h2>

          <div className="report-form">
            <div className="form-group">
              <label htmlFor="student">Select Student</label>
              <select
                id="student"
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
              >
                <option value="">Select Student</option>
                {students.map(student => (
                  <option key={student.id} value={student.name}>{student.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="period">Select Period</label>
              <select
                id="period"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option value="">Select Period</option>
                {periods.map(period => (
                  <option key={period.id} value={period.period}>{period.period}</option>
                ))}
              </select>
            </div>

            <button onClick={handlePrintReport}>Print Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintReportTeacherPage;

import React, { useState } from "react";
import Select from "react-select";
import Sidebar from "../components/Sidebar";
import "../styles/printReportAdminPage.css"; // Вашите стилове
import { useTranslation } from 'react-i18next';

const PrintReportAdminPage = () => {
  const userRole = 'admin'; // Актуализирайте според нуждите

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [report, setReport] = useState("");
  
  const { t } = useTranslation(); // Използване на useTranslation

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

  const handlePrintReport = () => {
    if (!selectedStudent || !selectedPeriod) {
      alert(t('pleaseSelectStudentPeriod'));
      return;
    }

    // Симулиране на генериране на отчет
    setReport(t('reportFor', { student: selectedStudent.label, period: selectedPeriod.label }));

    // Изчистване на избраните стойности
    setSelectedStudent(null);
    setSelectedPeriod(null);
  };

  return (
    <div className="dashboard dashboard-red">
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="print-report-teacher">
          <h2>{t('printReport')}</h2>

          <div className="report-form">
            {/* Select Student */}
            <div className="form-group">
              <label htmlFor="student">{t('selectStudent')}</label>
              <Select
                id="student"
                options={students.map(student => ({ value: student.id, label: student.name }))}
                value={selectedStudent}
                onChange={setSelectedStudent}
                placeholder={t('selectStudent')}
                isClearable
              />
            </div>

            {/* Select Period */}
            <div className="form-group">
              <label htmlFor="period">{t('selectPeriod')}</label>
              <Select
                id="period"
                options={periods.map(period => ({ value: period.id, label: period.period }))}
                value={selectedPeriod}
                onChange={setSelectedPeriod}
                placeholder={t('selectPeriod')}
                isClearable
              />
            </div>

            <button onClick={handlePrintReport}>{t('printReport')}</button>

            {report && (
              <div className="report-results">
                <h3>{t('reportResults')}</h3>
                <p>{report}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintReportAdminPage;

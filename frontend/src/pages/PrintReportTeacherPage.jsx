import React, { useState } from "react";
import Select from "react-select";
import { useTranslation } from 'react-i18next';
import Sidebar from "../components/Sidebar";
import "../styles/printReportTeacherPage.css"; // Вашите стилове

const PrintReportTeacherPage = () => {
  const { t } = useTranslation();
  const userRole = 'teacher'; // Актуализирайте според нуждите

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [report, setReport] = useState("");

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
      alert(t('please_select'));
      return;
    }

    // Симулиране на генериране на отчет
    setReport(`${t('report_results')}: ${selectedStudent.label} ${t('for')} ${selectedPeriod.label}`);

    // Изчистване на избраните стойности
    setSelectedStudent(null);
    setSelectedPeriod(null);
  };

  return (
    <div className={`dashboard ${userRole === 'teacher' ? 'dashboard-teacher' : ''}`}>
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="print-report-teacher">
          <h2>{t('print_report')}</h2>

          <div className="report-form">
            {/* Select Student */}
            <div className="form-group">
              <label htmlFor="student">{t('select_student')}</label>
              <Select
                id="student"
                options={students.map(student => ({ value: student.id, label: student.name }))}
                value={selectedStudent}
                onChange={setSelectedStudent}
                placeholder={t('select_student')}
                isClearable
              />
            </div>

            {/* Select Period */}
            <div className="form-group">
              <label htmlFor="period">{t('select_period')}</label>
              <Select
                id="period"
                options={periods.map(period => ({ value: period.id, label: period.period }))}
                value={selectedPeriod}
                onChange={setSelectedPeriod}
                placeholder={t('select_period')}
                isClearable
              />
            </div>

            <button onClick={handlePrintReport}>{t('print_report_button')}</button>

            {report && (
              <div className="report-results">
                <h3>{t('report_results')}</h3>
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

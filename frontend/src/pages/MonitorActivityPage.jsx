import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import LanguageSelector from '../components/LanguageSelector'; // Import LanguageSelector
import '../styles/monitorActivityPage.css';

// Регистриране на всички необходими елементи
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const MonitorActivityPage = () => {
  const { t } = useTranslation(); // Use translation hook
  const userRole = 'admin';

  // По подразбиране избран графика е 'totalUsers'
  const [selectedChart, setSelectedChart] = useState('totalUsers');

  const activityData = {
    totalUsers: 1200,
    activeUsersToday: 45,
    totalVisits: 5000,
  };

  const systemHealthData = {
    uptime: [99, 98, 97, 99.5, 100, 99, 98], // До юли
    downtime: [1, 2, 3, 0.5, 0, 1, 1.5], // До юли
    apiResponseTimes: [200, 300, 250, 400, 350, 300, 280], // До юли
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July'
  ].map(month => t(month)); // Translate months

  const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ].map(day => t(day)); // Translate days

  const totalUsersData = {
    labels: months,
    datasets: [
      {
        label: t('totalUsersOverTime'),
        data: [1000, 1050, 1100, 1150, 1180, 1200, 1220], // Променени данни до юли
        borderColor: '#526d82',
        backgroundColor: 'rgba(82, 109, 130, 0.2)',
      },
    ],
  };

  const activeUsersData = {
    labels: days,
    datasets: [
      {
        label: t('activeUsersTodayChart'),
        data: [10, 15, 30, 20, 45, 40, 45],
        borderColor: '#526d82',
        backgroundColor: 'rgba(82, 109, 130, 0.2)',
      },
    ],
  };

  const totalVisitsData = {
    labels: months,
    datasets: [
      {
        label: t('totalVisitsOverTime'),
        data: [700, 800, 1000, 1200, 1500, 1800, 1900], // Променени данни до юли
        borderColor: '#526d82',
        backgroundColor: 'rgba(82, 109, 130, 0.2)',
      },
    ],
  };

  const serverUptimeData = {
    labels: months,
    datasets: [
      {
        label: t('serverUptime'),
        data: systemHealthData.uptime,
        backgroundColor: 'rgba(0, 128, 0, 0.5)', // зелено за uptime
        borderColor: 'rgba(0, 128, 0, 1)',
      },
      {
        label: t('serverUptime'),
        data: systemHealthData.downtime,
        backgroundColor: 'rgba(255, 0, 0, 0.5)', // червено за downtime
        borderColor: 'rgba(255, 0, 0, 1)',
      },
    ],
  };

  const apiResponseTimesData = {
    labels: months,
    datasets: [
      {
        label: t('apiResponseTimesOverTime'),
        data: systemHealthData.apiResponseTimes,
        borderColor: '#526d82',
        backgroundColor: 'rgba(82, 109, 130, 0.2)',
      },
    ],
  };

  return (
    <div className="dashboard dashboard-red">
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <LanguageSelector /> {/* Add LanguageSelector here */}
        <div className="monitor-activity">
          <h2>{t('monitorActivity')}</h2>
          
          <div className="activity-summary">
            <div className="summary-item" onClick={() => setSelectedChart('totalUsers')}>
              <h3>{t('totalUsers')}</h3>
              <p>{activityData.totalUsers}</p>
            </div>
            <div className="summary-item" onClick={() => setSelectedChart('activeUsers')}>
              <h3>{t('activeUsersToday')}</h3>
              <p>{activityData.activeUsersToday}</p>
            </div>
            <div className="summary-item" onClick={() => setSelectedChart('totalVisits')}>
              <h3>{t('totalVisits')}</h3>
              <p>{activityData.totalVisits}</p>
            </div>
            <div className="summary-item" onClick={() => setSelectedChart('serverUptime')}>
              <h3>{t('serverUptime')}</h3>
              <p>{Math.max(...systemHealthData.uptime)}%</p>
            </div>
            <div className="summary-item" onClick={() => setSelectedChart('apiResponseTimes')}>
              <h3>{t('apiResponseTimes')}</h3>
              <p>{Math.max(...systemHealthData.apiResponseTimes)}ms</p>
            </div>
          </div>
          
          <div className="charts">
            {selectedChart === 'totalUsers' && (
              <div className="chart">
                <h3>{t('totalUsersOverTime')}</h3>
                <Line data={totalUsersData} options={{ maintainAspectRatio: false }} />
              </div>
            )}
            {selectedChart === 'activeUsers' && (
              <div className="chart">
                <h3>{t('activeUsersTodayChart')}</h3>
                <Bar data={activeUsersData} options={{ maintainAspectRatio: false }} />
              </div>
            )}
            {selectedChart === 'totalVisits' && (
              <div className="chart">
                <h3>{t('totalVisitsOverTime')}</h3>
                <Line data={totalVisitsData} options={{ maintainAspectRatio: false }} />
              </div>
            )}
            {selectedChart === 'serverUptime' && (
              <div className="chart">
                <h3>{t('serverUptimeAndDowntime')}</h3>
                <Bar
                  data={serverUptimeData}
                  options={{
                    indexAxis: 'y', // хоризонтална ориентация
                    scales: {
                      x: { stacked: true },
                      y: { stacked: true }
                    },
                    maintainAspectRatio: false
                  }}
                />
              </div>
            )}
            {selectedChart === 'apiResponseTimes' && (
              <div className="chart">
                <h3>{t('apiResponseTimesOverTime')}</h3>
                <Bar data={apiResponseTimesData} options={{ maintainAspectRatio: false }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorActivityPage;

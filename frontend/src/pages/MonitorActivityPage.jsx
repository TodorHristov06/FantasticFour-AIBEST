import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import Sidebar from '../components/Sidebar';
import '../styles/monitorActivityPage.css';

// Регистриране на всички необходими елементи
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const MonitorActivityPage = () => {
  const userRole = 'admin';

  // По подразбиране избран графика е 'totalUsers'
  const [selectedChart, setSelectedChart] = useState('totalUsers');

  const activityData = {
    totalUsers: 1200,
    activeUsersToday: 45,
    totalVisits: 5000,
  };

  const systemHealthData = {
    uptime: [99, 98, 97, 99.5, 100, 99],
    downtime: [1, 2, 3, 0.5, 0, 1],
    apiResponseTimes: [200, 300, 250, 400, 350, 300],
  };

  const totalUsersData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Total Users',
        data: [1000, 1050, 1100, 1150, 1180, 1200],
        borderColor: '#526d82',
        backgroundColor: 'rgba(82, 109, 130, 0.2)',
      },
    ],
  };

  const activeUsersData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Active Users Today',
        data: [10, 15, 30, 20, 45, 40, 45],
        borderColor: '#526d82',
        backgroundColor: 'rgba(82, 109, 130, 0.2)',
      },
    ],
  };

  const totalVisitsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Total Visits',
        data: [700, 800, 1000, 1200, 1500, 1800],
        borderColor: '#526d82',
        backgroundColor: 'rgba(82, 109, 130, 0.2)',
      },
    ],
  };

  const serverUptimeData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Uptime (%)',
        data: systemHealthData.uptime,
        backgroundColor: 'rgba(0, 128, 0, 0.5)', // зелено за uptime
        borderColor: 'rgba(0, 128, 0, 1)',
      },
      {
        label: 'Downtime (%)',
        data: systemHealthData.downtime,
        backgroundColor: 'rgba(255, 0, 0, 0.5)', // червено за downtime
        borderColor: 'rgba(255, 0, 0, 1)',
      },
    ],
  };

  const apiResponseTimesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'API Response Times (ms)',
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
        <div className="monitor-activity">
          <h2>Monitor Activity</h2>
          
          <div className="activity-summary">
            <div className="summary-item" onClick={() => setSelectedChart('totalUsers')}>
              <h3>Total Users</h3>
              <p>{activityData.totalUsers}</p>
            </div>
            <div className="summary-item" onClick={() => setSelectedChart('activeUsers')}>
              <h3>Active Users Today</h3>
              <p>{activityData.activeUsersToday}</p>
            </div>
            <div className="summary-item" onClick={() => setSelectedChart('totalVisits')}>
              <h3>Total Visits</h3>
              <p>{activityData.totalVisits}</p>
            </div>
            <div className="summary-item" onClick={() => setSelectedChart('serverUptime')}>
              <h3>Server Uptime</h3>
              <p>{Math.max(...systemHealthData.uptime)}%</p>
            </div>
            <div className="summary-item" onClick={() => setSelectedChart('apiResponseTimes')}>
              <h3>API Response Times</h3>
              <p>{Math.max(...systemHealthData.apiResponseTimes)}ms</p>
            </div>
          </div>
          
          <div className="charts">
            {selectedChart === 'totalUsers' && (
              <div className="chart">
                <h3>Total Users Over Time</h3>
                <Line data={totalUsersData} options={{ maintainAspectRatio: false }} />
              </div>
            )}
            {selectedChart === 'activeUsers' && (
              <div className="chart">
                <h3>Active Users Today</h3>
                <Bar data={activeUsersData} options={{ maintainAspectRatio: false }} />
              </div>
            )}
            {selectedChart === 'totalVisits' && (
              <div className="chart">
                <h3>Total Visits Over Time</h3>
                <Line data={totalVisitsData} options={{ maintainAspectRatio: false }} />
              </div>
            )}
            {selectedChart === 'serverUptime' && (
              <div className="chart">
                <h3>Server Uptime and Downtime</h3>
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
                <h3>API Response Times Over Time</h3>
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

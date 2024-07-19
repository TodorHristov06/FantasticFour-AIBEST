import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/monitorActivityPage.css";

const MonitorActivityPage = () => {
  const userRole = 'admin';

  const activityData = {
    totalUsers: 1200,
    activeUsersToday: 45,
    totalVisits: 5000,
    topActivity: [
      { page: 'Dashboard', visits: 1200 },
      { page: 'Profile', visits: 800 },
      { page: 'Courses', visits: 600 },
    ],
  };

  return (
    <div className="dashboard dashboard-red">
      <Sidebar role={userRole} />
      <div className="dashboard--content">
        <div className="monitor-activity">
          <h2>Monitor Activity</h2>
          
          <div className="activity-summary">
            <div className="summary-item">
              <h3>Total Users</h3>
              <p>{activityData.totalUsers}</p>
            </div>
            <div className="summary-item">
              <h3>Active Users Today</h3>
              <p>{activityData.activeUsersToday}</p>
            </div>
            <div className="summary-item">
              <h3>Total Visits</h3>
              <p>{activityData.totalVisits}</p>
            </div>
          </div>
          
          <div className="top-activity">
            <h3>Top Activity</h3>
            <ul>
              {activityData.topActivity.map((activity, index) => (
                <li key={index}>
                  <span>{activity.page}</span> - <span>{activity.visits} visits</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorActivityPage;
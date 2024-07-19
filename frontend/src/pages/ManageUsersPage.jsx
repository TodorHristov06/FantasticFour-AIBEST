import React from 'react';
import Sidebar from "../components/Sidebar";
import "../styles/manageUsersPage.css"; // Създай този файл за специфични стилове

const ManageUsersPage = () => {
  const userRole = 'admin';
  return (
    <div className="dashboard dashboard-red">
        <Sidebar role={userRole} />
      <div className="dashboard--content">
        <h1>Manage Users</h1>
        <p>Here you can manage users.</p>
        {/* Добави съдържание и функционалност за управление на потребители */}
      </div>
    </div>
  );
};

export default ManageUsersPage;
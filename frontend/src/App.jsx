import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Login from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import TeacherPage from './pages/TeacherPage';
import StudentPage from './pages/StudentPage';
import ManageUsersPage from './pages/ManageUsersPage';
import { AuthProvider, useAuth } from './components/AuthContext';
import MonitorActivityPage from './pages/MonitorActivityPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/manage-users" element={<ManageUsersPage />} />
          <Route path="/monitor-activity"  element={<MonitorActivityPage/>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'; // Добавен useNavigate
import { AuthProvider, useAuth } from './components/AuthContext';
import Login from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import TeacherPage from "./pages/TeacherPage";
import StudentPage from "./pages/StudentPage";
import ManageUsersPage from "./pages/ManageUsersPage"; // Импортиране на ManageUsersPage
import MonitorActivityPage from "./pages/MonitorActivityPage"; // Импортиране на MonitorActivityPage
import AssignClassesPage from "./pages/AssignClassesPage"; // Импортиране на AssignClassesPage
import PrintReportAdminPage from './pages/PrintReportAdminPage'; // Импортиране на PrintReportPage
import CreateAssignment from './pages/CreateAssignmentPage'; // Импортиране на CreateAssignmentPage
import PrintReportTeacherPage from './pages/PrintReportTeacherPage';

const ProtectedRoute = ({ element, ...rest }) => {
  const { auth } = useAuth();
  const navigate = useNavigate(); // Добавен useNavigate

  React.useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate('/login');
    }
  }, [auth.isAuthenticated, navigate]);

  return auth.isAuthenticated ? element : null;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute element={<AdminPage />} />} />
          <Route path="/teacher" element={<ProtectedRoute element={<TeacherPage />} />} />
          <Route path="/student" element={<ProtectedRoute element={<StudentPage />} />} />
          <Route path="/manage-users" element={<ProtectedRoute element={<ManageUsersPage />} />} />
          <Route path="/monitor-activity" element={<ProtectedRoute element={<MonitorActivityPage />} />} />
          <Route path="/assign-classes" element={<ProtectedRoute element={<AssignClassesPage />} />} />
          <Route path="/print-report-admin" element={<ProtectedRoute element={<PrintReportAdminPage />} />} />
          <Route path="/assignment" element={<ProtectedRoute element={<CreateAssignment />} />} />
          <Route path="/print-report-teacher" element={<ProtectedRoute element={<PrintReportTeacherPage />} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
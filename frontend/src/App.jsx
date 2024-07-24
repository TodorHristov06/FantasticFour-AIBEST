import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthContext';
import Login from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import TeacherPage from './pages/TeacherPage';
import StudentPage from './pages/StudentPage';
import ManageUsersPage from './pages/ManageUsersPage';
import MonitorActivityPage from './pages/MonitorActivityPage';
import AssignClassesPage from './pages/AssignClassesPage';
import PrintReportAdminPage from './pages/PrintReportAdminPage';
import CreateAssignment from './pages/CreateAssignmentPage';
import PrintReportTeacherPage from './pages/PrintReportTeacherPage';
import GradeAssignmentsPage from './pages/GradeAssignmentsPage';
import StudentTeacherPage from './pages/StudentTeacherPage';
import StudentSubmitPage from './pages/StudentSubmitPage';
import StudentAssignmentsPage from './pages/StudentAssignmentsPage';

const ProtectedRoute = ({ element, ...rest }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();

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
          <Route path="/grades" element={<ProtectedRoute element={<GradeAssignmentsPage />} />} />
          <Route path="/students" element={<ProtectedRoute element={<StudentTeacherPage />} />} />
          <Route path="/submit" element={<ProtectedRoute element={<StudentSubmitPage />} />} />
          <Route path="/student_assignments" element={<ProtectedRoute element={<StudentAssignmentsPage />} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

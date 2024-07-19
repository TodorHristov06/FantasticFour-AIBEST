import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/AuthContext";
import WelcomePage from "./pages/WelcomePage";
import Login from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import TeacherPage from "./pages/TeacherPage";
import StudentPage from "./pages/StudentPage";
import ManageUsersPage from "./pages/ManageUsersPage"; // Импортиране на ManageUsersPage

const ProtectedRoute = ({ element, ...rest }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
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
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute element={<AdminPage />} />} />
          <Route path="/teacher" element={<ProtectedRoute element={<TeacherPage />} />} />
          <Route path="/student" element={<ProtectedRoute element={<StudentPage />} />} />
          <Route path="/manage-users" element={<ProtectedRoute element={<ManageUsersPage />} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

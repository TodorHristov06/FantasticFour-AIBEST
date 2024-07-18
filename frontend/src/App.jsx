import React from "react";
import { AuthProvider, useAuth } from "./components/AuthContext";
import WelcomePage from "./pages/WelcomePage";
import Login from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import TeacherPage from "./pages/TeacherPage";
import StudentPage from "./pages/StudentPage";

function App() {
  const { auth, login } = useAuth();

  const renderPage = () => {
    if (!auth.isAuthenticated) {
      return <Login onLogin={login} />;
    }

    switch (auth.role) {
      case "admin":
        return <AdminPage />;
      case "teacher":
        return <TeacherPage />;
      case "student":
        return <StudentPage />;
      default:
        return <WelcomePage />;
    }
  };

  return renderPage();
  // return <StudentPage/>
  // return <AdminPage/>
  // return <TeacherPage/>
  // return WelcomePage();
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

import React from "react";
import AdminHeader from "./AdminHeader";
import "../styles/adminContent.css"; // Създайте този файл със стиловете за съдържанието на администратора
import AdminCard from '../components/AdminCard'; // Създайте този компонент
import AdminList from "./AdminList"; // Създайте този компонент

const AdminContent = () => {
  return (
    <div className="admin-content">
      <AdminHeader />
      <AdminCard />
      <AdminList />
    </div>
  );
};

export default AdminContent;
import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Profile from "../components/Profile";
import Card from "../components/Card";
import "../styles/welcomePage.css";

const WelcomePage = () => {
  return (
    <div className="dashboard">
        <Sidebar />
      <div className="dashboard--content">
        <Content/>
        <Profile/>
      </div>
    </div>
  );
};

export default WelcomePage;

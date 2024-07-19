import React from "react";
import {
    BiHome,
    BiBookAlt,
    BiSolidReport,
    BiStats,
    BiTask,
    BiUser,
    BiListUl,
    BiEdit,
    BiTrash
} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = ({ role }) => {
    const getDashboardLink = () => {
        switch (role) {
            case 'admin':
                return '/admin';
            case 'teacher':
                return '/teacher';
            case 'student':
                return '/student';
            default:
                return '/';
        }
    };

    return (
        <div className={`menu ${role === 'student' ? 'student-view-only' : role === 'teacher' ? 'teacher-view-only' : role === 'admin' ? 'admin-view-only' : ''}`}>
            <div className="logo">
                <BiBookAlt className='logo-icon'/>
                <h2>FantasticFour</h2>
            </div>

            <div className="menu--list">
                <Link to={getDashboardLink()} className="item">
                    <BiHome className="icon"/>
                    Dashboard
                </Link>
                <Link to="/assignment" className="item">
                    <BiTask className="icon"/>
                    Assignment
                </Link>
                <Link to="/report" className="item">
                    <BiSolidReport className="icon"/>
                    Report
                </Link>
                <Link to="/grades" className="item">
                    <BiStats className="icon"/>
                    Grades
                </Link>
                {role === 'teacher' && (
                    <>
                        <Link to="/students" className="item">
                            <BiUser className="icon"/>
                            Students
                        </Link>
                        <Link to="/print-report" className="item">
                            <BiListUl className="icon"/>
                            Print Report
                        </Link>
                    </>
                )}
                {role === 'admin' && (
                    <>
                        <Link to="/manage-users" className="item">
                            <BiUser className="icon"/>
                            Manage Users
                        </Link>
                        <Link to="/monitor-activity" className="item">
                            <BiEdit className="icon"/>
                            Monitor Activity
                        </Link>
                        <Link to="/assign-classes" className="item">
                            <BiListUl className="icon"/>
                            Assign Classes
                        </Link>
                        <Link to="/print-report" className="item">
                            <BiListUl className="icon"/>
                            Print Report
                        </Link>
                        <Link to="/delete-users" className="item">
                            <BiTrash className="icon"/>
                            Delete Users
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sidebar;

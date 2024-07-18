import React from "react";
import {
    BiHome,
    BiBookAlt,
    BiMessage,
    BiSolidReport,
    BiStats,
    BiTask,
    BiHelpCircle,
    BiUser,
    BiListUl,
    BiEdit,
    BiTrash
} from 'react-icons/bi';
import '../styles/sidebar.css';

const Sidebar = ({ role }) => {
    return (
        <div className={`menu ${role === 'student' ? 'student-view-only' : role === 'teacher' ? 'teacher-view-only' : role === 'admin' ? 'admin-view-only' : ''}`}>
            <div className="logo">
                <BiBookAlt className='logo-icon'/>
                <h2>FantasticFour</h2>
            </div>

            <div className="menu--list">
                <a href="#" className="item">
                    <BiHome className="icon"/>
                    Dashboard
                </a>
                <a href="#" className="item">
                    <BiTask className="icon"/>
                    Assignment
                </a>
                <a href="#" className="item">
                    <BiSolidReport className="icon"/>
                    Report
                </a>
                <a href="#" className="item">
                    <BiStats className="icon"/>
                    Grades
                </a>
                {role === 'teacher' && (
                    <>
                        <a href="#" className="item">
                            <BiUser className="icon"/>
                            Students
                        </a>
                        <a href="#" className="item">
                            <BiListUl className="icon"/>
                            Print Report
                        </a>
                    </>
                )}
                {role === 'admin' && (
                    <>
                        <a href="#" className="item">
                            <BiUser className="icon"/>
                            Manage Users
                        </a>
                        <a href="#" className="item">
                            <BiEdit className="icon"/>
                            Monitor Activity
                        </a>
                        <a href="#" className="item">
                            <BiListUl className="icon"/>
                            Assign Classes
                        </a>
                        <a href="#" className="item">
                            <BiListUl className="icon"/>
                            Print Report
                        </a>
                        <a href="#" className="item">
                            <BiTrash className="icon"/>
                            Delete Users
                        </a>
                    </>
                )}
            </div>
        </div>
    )
}

export default Sidebar;

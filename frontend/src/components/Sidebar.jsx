import React from "react";
import { BiHome, BiBookAlt, BiSolidReport, BiStats, BiTask, BiUser, BiListUl, BiEdit, BiTrash, BiWorld } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
import ProfilePicture from '../assets/ProfilePicture.jpg';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ role }) => {
    const { t, i18n } = useTranslation();

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

    const roleContent = {
        student: {
            username: 'Dimitar Hristov',
            role: 'Student',
        },
        teacher: {
            username: 'Maria Ivanova',
            role: 'Teacher',
        },
        admin: {
            username: 'John Smith',
            role: 'Administrator',
        },
    };

    const user = roleContent[role]; // Get user details based on role

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className={`menu ${role === 'student' ? 'student-view-only' : role === 'teacher' ? 'teacher-view-only' : role === 'admin' ? 'admin-view-only' : ''}`}>
            <div className="logo">
                <BiBookAlt className='logo-icon'/>
                <h2>FantasticFour</h2>
                <div className="user-info">
                    <img src={ProfilePicture} alt="Profile" className="profile-picture" />
                    <div>
                        <div className="username">{user.username}</div>
                        <div className="role">{user.role}</div>
                    </div>
                </div>
            </div>

            <div className="menu--list">
                <Link to={getDashboardLink()} className="item">
                    <BiHome className="icon"/>
                    {t('dashboard')}
                </Link>
                <Link to="/assignment" className="item">
                    <BiTask className="icon"/>
                    {t('assignment')}
                </Link>
                <Link to="/report" className="item">
                    <BiSolidReport className="icon"/>
                    {t('report')}
                </Link>
                <Link to="/grades" className="item">
                    <BiStats className="icon"/>
                    {t('grades')}
                </Link>
                {role === 'teacher' && (
                    <>
                        <Link to="/students" className="item">
                            <BiUser className="icon"/>
                            {t('students_assignments')}
                        </Link>
                        <Link to="/print-report-teacher" className="item">
                            <BiListUl className="icon"/>
                            {t('print_report')}
                        </Link>
                    </>
                )}
                {role === 'admin' && (
                    <>
                        <Link to="/manage-users" className="item">
                            <BiUser className="icon"/>
                            {t('manage_users')}
                        </Link>
                        <Link to="/monitor-activity" className="item">
                            <BiEdit className="icon"/>
                            {t('system_management')}
                        </Link>
                        <Link to="/assign-classes" className="item">
                            <BiListUl className="icon"/>
                            {t('manage_classes')}
                        </Link>
                        <Link to="/print-report-admin" className="item">
                            <BiListUl className="icon"/>
                            {t('print_report')}
                        </Link>
                        <Link to="/print-report-teacher" className="item">
                            <BiListUl className="icon"/>
                            {t('print_report')}
                        </Link>
                    </>
                )}
                <button className="language-button" onClick={() => handleLanguageChange(i18n.language === 'en' ? 'bg' : 'en')}>
                    <BiWorld className="icon"/>
                    {i18n.language === 'en' ? 'Български' : 'English'}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;

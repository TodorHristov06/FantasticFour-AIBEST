import React from "react";
import ProfileHeader from "./ProfileHeader";
import '../styles/profile.css';
import ProfilePicture from '../assets/ProfilePicture.jpg'
import { BiBook } from 'react-icons/bi'

const courses = [
    {
        title: 'Web Development',
        duration: '2 Hours',
        icon: <BiBook />,
    },
    {
        title: 'Machine Learning',
        duration: '3 Hours',
        icon: <BiBook />,
    },
    {
        title: 'Data Structures',
        duration: '1.5 Hours',
        icon: <BiBook />,
    },
];

const Profile = ({ role }) => {
    // Define role-specific content
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

    return (
        <div className="profile">
            <ProfileHeader />

            <div className="user--profile">
                <div className="user--detail">
                    <img src={ProfilePicture} alt="" />
                    <h3 className="username">{user.username}</h3>
                    <span className="role">{user.role}</span>
                </div>

                <div className="user-courses">
                    {courses.map((course, index) => (
                        <div className='course' key={index}>
                            <div className="course-detail">
                                <div className="course-cover">{course.icon}</div>
                                <div className="course-name">
                                    <h5 className="title">{course.title}</h5>
                                    <span className="duration">{course.duration} </span>
                                </div>
                            </div>
                            <div className="action">:</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;

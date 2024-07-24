import React from 'react';
import { Link } from 'react-router-dom';
import {
    BiBook,
    BiTask,
    BiStar,
} from 'react-icons/bi';

// Актуализирани данни за картите
const studentFeatures = [
    {
        id: 1,
        title: 'Assignments',
        icon: <BiTask />,
        path: '/student_assignments', // Път към страницата с задания
    },
    {
        id: 2,
        title: 'Grades',
        icon: <BiBook />,
        path: '/student-grades', // Път към страницата с оценки
    },
    {
        id: 3,
        title: 'Submit',
        icon: <BiStar />,
        path: '/submit', // Път към страницата за изпращане на задания
    },
];

const StudentCard = () => {
    return (
        <div className='card--container'>
            {studentFeatures.map((item) => (
                <Link key={item.id} to={item.path} className='card'>
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{item.title}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default StudentCard;

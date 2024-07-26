import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Импортирайте useTranslation
import {
    BiBook,
    BiTask,
    BiStar,
} from 'react-icons/bi';

// Актуализирани данни за картите
const studentFeatures = [
    {
        id: 1,
        title: 'student_assignments', // Използвайте ключове за превод
        icon: <BiTask />,
        path: '/student_assignments', // Път към страницата с задания
    },
    {
        id: 2,
        title: 'grades', // Използвайте ключове за превод
        icon: <BiBook />,
        path: '/student-grades', // Път към страницата с оценки
    },
    {
        id: 3,
        title: 'submit', // Използвайте ключове за превод
        icon: <BiStar />,
        path: '/submit', // Път към страницата за изпращане на задания
    },
];

const StudentCard = () => {
    const { t } = useTranslation(); // Използвайте useTranslation за локализация

    return (
        <div className='card--container'>
            {studentFeatures.map((item) => (
                <Link key={item.id} to={item.path} className='card'>
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{t(item.title)}</h2> {/* Локализиране на заглавията */}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default StudentCard;

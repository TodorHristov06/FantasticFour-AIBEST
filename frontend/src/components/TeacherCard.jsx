import React from 'react';
import { BiBook, BiCalendar, BiClipboard } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const teacherTasks = [
    {
        id: 1,
        title: 'assignments', // Използвайте ключове за локализация
        icon: <BiBook />,
        path: '/assignment',
    },
    {
        id: 2,
        title: 'grades', // Използвайте ключове за локализация
        icon: <BiCalendar />,
        path: '/grades',
    },
    {
        id: 3,
        title: 'print_report', // Използвайте ключове за локализация
        icon: <BiClipboard />,
        path: '/print-report-teacher',
    },
];

const TeacherCard = () => {
    const { t } = useTranslation(); // Използвайте useTranslation за локализация
    const navigate = useNavigate();

    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <div className='card--container'>
            {teacherTasks.map((item) => (
                <div
                    key={item.id}
                    className='card'
                    onClick={() => handleCardClick(item.path)}
                >
                    <div className="card--cover">
                        {item.icon}
                    </div>
                    <div className="card--title">
                        <h2>{t(item.title)}</h2> {/* Локализиране на текста */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeacherCard;

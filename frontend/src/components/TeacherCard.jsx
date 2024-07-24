import React from 'react';
import { BiBook, BiCalendar, BiClipboard } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const teacherTasks = [
    {
        id: 1,
        title: 'Assignments',
        icon: <BiBook />,
        path: '/assignment', // Add path for navigation
    },
    {
        id: 2,
        title: 'Grades',
        icon: <BiCalendar />,
        path: '/grades', // Add path for navigation
    },
    {
        id: 3,
        title: 'Print Report',
        icon: <BiClipboard />,
        path: '/print-report-teacher', // Add path for navigation
    },
];

const TeacherCard = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleCardClick = (path) => {
        navigate(path); // Navigate to the specified path
    };

    return (
        <div className='card--container'>
            {teacherTasks.map((item) => (
                <div
                    key={item.id}
                    className='card'
                    onClick={() => handleCardClick(item.path)} // Add click handler
                >
                    <div className="card--cover">
                        {item.icon}
                    </div>
                    <div className="card--title">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeacherCard;

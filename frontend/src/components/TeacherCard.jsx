import React from 'react';
import {
    BiBook,
    BiCalendar,
    BiClipboard,
} from 'react-icons/bi';

const teacherTasks = [
    {
        id: 1,
        title: 'Lesson Plans',
        icon: <BiBook />,
    },
    {
        id: 2,
        title: 'Schedule',
        icon: <BiCalendar />,
    },
    {
        id: 3,
        title: 'Assignments',
        icon: <BiClipboard />,
    },
];

const TeacherCard = () => {
    return (
        <div className='card--container'>
            {teacherTasks.map((item) => (
                <div key={item.id} className='card'>
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeacherCard;

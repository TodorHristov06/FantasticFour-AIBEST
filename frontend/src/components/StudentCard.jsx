import React from 'react';
import {
    BiBook,
    BiTask,
    BiStar,
} from 'react-icons/bi';

const studentFeatures = [
    {
        id: 1,
        title: 'My Courses',
        icon: <BiBook />,
    },
    {
        id: 2,
        title: 'Assignments',
        icon: <BiTask />,
    },
    {
        id: 3,
        title: 'Achievements',
        icon: <BiStar />,
    },
];

const StudentCard = () => {
    return (
        <div className='card--container'>
            {studentFeatures.map((item) => (
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

export default StudentCard;

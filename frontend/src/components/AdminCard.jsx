// AdminCard.jsx
import React from 'react';
import { BiUser, BiCog, BiChart } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const adminFeatures = [
    {
        id: 1,
        title: 'User Management',
        icon: <BiUser />,
        path: '/manage-users'
    },
    {
        id: 2,
        title: 'System Analytics',
        icon: <BiCog />,
        path: '/monitor-activity'
    },
    {
        id: 3,
        title: 'Report',
        icon: <BiChart />,
        path: '/print-report-admin'
    },
];

const AdminCard = () => {
    const navigate = useNavigate();

    return (
        <div className='card--container'>
            {adminFeatures.map((item) => (
                <div 
                    key={item.id} 
                    className='card' 
                    onClick={() => navigate(item.path)} // Навигация при клик
                >
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminCard;

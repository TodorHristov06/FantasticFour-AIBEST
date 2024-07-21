import React from 'react';
import {
    BiUser,
    BiCog,
    BiChart,
} from 'react-icons/bi';

const adminFeatures = [
    {
        id: 1,
        title: 'User Management',
        icon: <BiUser />,
    },
    {
        id: 2,
        title: 'Settings',
        icon: <BiCog />,
    },
    {
        id: 3,
        title: 'Reports',
        icon: <BiChart />,
    },
];

const AdminCard = () => {
    return (
        <div className='card--container'>
            {adminFeatures.map((item) => (
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

export default AdminCard;

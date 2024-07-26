// AdminCard.jsx
import React from 'react';
import { BiUser, BiCog, BiChart } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AdminCard = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const adminFeatures = [
        {
            id: 1,
            title: t('user_management'),
            icon: <BiUser />,
            path: '/manage-users'
        },
        {
            id: 2,
            title: t('system_analytics'),
            icon: <BiCog />,
            path: '/monitor-activity'
        },
        {
            id: 3,
            title: t('report'),
            icon: <BiChart />,
            path: '/print-report-admin'
        },
    ];

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

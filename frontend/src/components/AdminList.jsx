// AdminList.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/adminList.css"; // Използвайте вашия стилов файл
import ProfilePicture from '../assets/ProfilePicture.jpg'; // Примерна картинка

const users = [
    {
        id: 1,
        image: ProfilePicture,
        name: "John Doe",
        role: 'Teacher',
        status: 'Active',
    },
    {
        id: 2,
        image: ProfilePicture,
        name: "Jane Smith",
        role: 'Student',
        status: 'Inactive',
    },
    // Добавете повече потребители тук
];

const AdminList = () => {
    const { t } = useTranslation();

    return (
        <div className="admin--list">
            <div className="list--header">
                <h2>{t('users')}</h2>
                <select>
                    <option value="all">{t('all')}</option>
                    <option value="active">{t('active')}</option>
                    <option value="inactive">{t('inactive')}</option>
                </select>
            </div>
            <div className="list--container">
                {users.map((user) => (
                    <div key={user.id} className="list">
                        <div className="admin--detail">
                            <img src={user.image} alt={user.name} />
                            <h2>{user.name}</h2>
                        </div>
                        <span className='admin--role'>{user.role}</span>
                        <span className='admin--status'>{user.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminList;

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/adminList.css"; // Използвайте вашия стилов файл
import ProfilePicture from '../assets/ProfilePicture.jpg'; // Примерна картинка

const users = [
    {
        id: 1,
        image: ProfilePicture,
        name: "Dimitar Hristov",
        role: 'Student',
        status: 'Active',
    },
    {
        id: 2,
        image: ProfilePicture,
        name: "Petar Petrov",
        role: 'Teacher',
        status: 'Active',
    },
    {
        id: 3,
        image: ProfilePicture,
        name: "Stoil Petkanov",
        role: 'Student',
        status: 'Inactive',
    },
    {
        id: 4,
        image: ProfilePicture,
        name: "Evgeni Ganchev",
        role: 'Student',
        status: 'Active',
    },
    {
        id: 5,
        image: ProfilePicture,
        name: "Maria Ivanova",
        role: 'Teacher',
        status: 'Inactive',
    },
    // Добавете повече потребители тук
];

const AdminList = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('all');
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        if (filter === 'all') {
            setFilteredUsers(users);
        } else {
            setFilteredUsers(users.filter(user => user.status.toLowerCase() === filter));
        }
    }, [filter]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="admin--list">
            <div className="list--header">
                <h2>{t('users')}</h2>
                <select onChange={handleFilterChange} value={filter}>
                    <option value="all">{t('all')}</option>
                    <option value="active">{t('active')}</option>
                    <option value="inactive">{t('inactive')}</option>
                </select>
            </div>
            <div className="list--container">
                {filteredUsers.map((user) => (
                    <div key={user.id} className="list">
                        <div className="admin--detail">
                            <img src={user.image} alt={user.name} />
                            <h2>{user.name}</h2>
                        </div>
                        <span className='admin--role'>{t(`role_${user.role.toLowerCase()}`)}</span>
                        <span className='admin--status'>{t(`status_${user.status.toLowerCase()}`)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminList;

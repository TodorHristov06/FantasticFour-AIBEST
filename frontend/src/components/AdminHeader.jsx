import React from 'react';
import { useTranslation } from 'react-i18next';

const AdminHeader = () => {
    const { t } = useTranslation(); // Използвайте useTranslation за локализация

    return (
        <div className='content--header'>
            <h1 className="header--title">{t('admin_dashboard')}</h1>
            <div className="header--activity">
            </div>
        </div>
    );
};

export default AdminHeader;
import React from 'react';
import { useTranslation } from 'react-i18next'; // Импортирайте useTranslation

const TeacherHeader = () => {
    const { t } = useTranslation(); // Използвайте useTranslation за локализация

    return (
        <div className='content--header'>
            <h1 className="header--title">{t('teacher_dashboard')}</h1> {/* Локализиране на заглавието */}
            <div className="header--activity">
            </div>
        </div>
    );
};

export default TeacherHeader;

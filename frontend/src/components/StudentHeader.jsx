import React from 'react';
import { useTranslation } from 'react-i18next'; // Импортирайте useTranslation

const StudentHeader = () => {
    const { t } = useTranslation(); // Използвайте useTranslation за локализация

    return (
        <div className='content--header'>
            <h1 className="header--title">{t('student_dashboard')}</h1> {/* Локализиране на заглавието */}
            <div className="header--activity">
                {/* Можете да добавите икони или друга активност тук */}
            </div>
        </div>
    );
};

export default StudentHeader;

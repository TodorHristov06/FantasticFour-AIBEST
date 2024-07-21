import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/languageSelector.css"; // Уверете се, че CSS файлът е включен

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className="language-selector">
            <select onChange={handleChange} value={i18n.language}>
                <option value="en">En</option>
                <option value="bg">Bg</option>
                {/* Добавете повече езици тук */}
            </select>
        </div>
    );
};

export default LanguageSelector;

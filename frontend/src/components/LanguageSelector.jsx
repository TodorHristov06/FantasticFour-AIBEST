import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/languageSelector.css"; // Ensure this CSS file includes styles for the dropdown

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className="language-selector">
            <select onChange={handleChange} value={i18n.language}>
                <option value="en">English</option>
                <option value="bg">Bulgarian</option>
                {/* Add more languages here */}
            </select>
        </div>
    );
};

export default LanguageSelector;

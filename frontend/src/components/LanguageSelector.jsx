import React from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags'; // Импорт на библиотеката
import "../styles/languageSelector.css"; // Уверете се, че CSS файлът е включен

// Опции за езиците с добавени флагове
const languageOptions = [
    { value: 'en', label: 'English', flag: 'GB' }, // Код на флага за Англия
    { value: 'bg', label: 'Bulgarian', flag: 'BG' } // Код на флага за България
    // Можете да добавите повече езици и флагове тук
];

// Функция за добавяне на флагове към опцията
const formatOptionLabel = ({ flag, label }) => (
    <div className="option-label">
        <Flag code={flag} style={{ width: '24px', height: '16px', marginRight: '10px' }} /> {/* Визуализация на флага */}
        {label}
    </div>
);

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (selectedOption) => {
        i18n.changeLanguage(selectedOption.value);
    };

    return (
        <div className="language-selector">
            <Select
                options={languageOptions}
                value={languageOptions.find(option => option.value === i18n.language)}
                onChange={handleLanguageChange}
                className="language-dropdown"
                classNamePrefix="react-select"
                formatOptionLabel={formatOptionLabel}
                placeholder="Select Language"
            />
        </div>
    );
};

export default LanguageSelector;
import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/languageSelector.css";

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
      <div className="language-selector">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('bg')}>BG</button>
      </div>
    );
};

export default LanguageSelector;    
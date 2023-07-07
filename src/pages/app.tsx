import React from 'react';
import './app.scss';
import Main from '@layouts/main/main';
import AddInfoLayout from '@src/layouts/add-info-layout/add-info-layout';
import LangContext from '@src/contexts/LangContext';

export const App: React.FC = () => {
  const [lang, setLang] = React.useState(localStorage.getItem('lang') || 'ru');

  const toggleLang = () => {
    const newLang = lang === 'ru' ? 'en' : 'ru';

    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };
  return (
    <LangContext.Provider value={{ language: lang, toggleLanguage: toggleLang }}>
      <div className={`wrapper ${lang === 'en' ? 'wrapper_en' : 'wrapper_ru'}`}>
        <button className="wrapper__langSwitcher" onClick={() => toggleLang()}>
          {lang.toUpperCase()}
        </button>
        <Main />
        <AddInfoLayout />
      </div>
    </LangContext.Provider>
  );
};

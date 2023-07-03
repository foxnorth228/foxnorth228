import React from 'react';
import './app.scss';
import Main from '@layouts/main/main';
import AddInfoBlock from '@layouts/add-info-block/add-info-block';
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
      <div style={{ fontFamily: lang === 'en' ? 'Poppins' : 'Lato Light' }} className="wrapper">
        <button className="wrapper__langSwitcher" onClick={() => toggleLang()}>
          {lang.toUpperCase()}
        </button>
        <Main />
        <AddInfoBlock />
      </div>
    </LangContext.Provider>
  );
};

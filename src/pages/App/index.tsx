import React from 'react';
import './style.scss';
import Main from '@layouts/Main';
import AddInfoLayout from '@layouts/AddInfoLayout';
import LangContext from '@contexts/LangContext';

export const App: React.FC = () => {
  const [lang, setLang] = React.useState<'en' | 'ru'>(localStorage.getItem('lang') || 'ru');

  const toggleLang = () => {
    const newLang = lang === 'ru' ? 'en' : 'ru';

    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };
  return (
    <LangContext.Provider value={lang}>
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

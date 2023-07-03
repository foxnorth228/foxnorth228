import React from 'react';
import LangContext from '@contexts/LangContext';

type Locale = Record<string, string>;

const useLanguage = (file: string): Locale => {
  const { language } = React.useContext(LangContext);
  const [locale, setlocale] = React.useState<Locale>({});

  React.useEffect(() => {
    const getLocale = async () => {
      const locale = await import(`../lang/${language}/${file}.${language}.json`);
      setlocale(locale);
    };

    getLocale();
  }, [file, language]);

  return locale;
};

export default useLanguage;

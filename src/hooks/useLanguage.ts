import React from 'react';
import LangContext from '@contexts/LangContext';

const useLanguage = (): 'en' | 'ru' => React.useContext(LangContext);

export default useLanguage;

import React from 'react';
import LangContext from '@contexts/LangContext';
import { ILangContext } from '@contexts/LangContext/types';

const useLanguage = (): ILangContext => React.useContext(LangContext);

export default useLanguage;

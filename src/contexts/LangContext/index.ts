import * as React from 'react';
import { Context } from 'react';
import { ILangContext } from '@contexts/LangContext/types';

const LangContext: Context<ILangContext> = React.createContext('en' as ILangContext);

export default LangContext;

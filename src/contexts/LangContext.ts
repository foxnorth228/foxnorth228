import * as React from 'react';
import { Context } from 'react';

const LangContext: Context<'en' | 'ru'> = React.createContext('en' as 'en' | 'ru');

export default LangContext;

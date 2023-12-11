import React from 'react';
import './style.scss';
import lang from './lang';
import useLanguage from '@hooks/useLanguage';

const AuthorFace = () => {
  const langType = useLanguage();
  return (
    <div className="authorFace">
      <div className="authorFace__image"></div>
      <h2 className="authorFace__name">{lang[langType].name}</h2>
      <h3 className="authorFace__job">{lang[langType].job}</h3>
    </div>
  );
};

export default AuthorFace;

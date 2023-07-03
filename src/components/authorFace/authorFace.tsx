import React from 'react';
import './authorFace.scss';
import useLanguage from '@src/hooks/useLanguage';

const AuthorFace = () => {
  const locale = useLanguage('authorFace');
  return (
    <div className="authorFace">
      <div className="authorFace__image"></div>
      <h2 className="authorFace__name">{locale.name}</h2>
      <h3 className="authorFace__job">{locale.job}</h3>
    </div>
  );
};

export default AuthorFace;

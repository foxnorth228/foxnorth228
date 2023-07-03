import React from 'react';
import './authorFace.scss';
import useLanguage from '@src/hooks/useLanguage';

const AuthorFace = () => {
  const { language } = useLanguage('authorFace');
  return (
    <div className="authorFace">
      <div className="authorFace__image"></div>
      <h2 className="authorFace__name">Alexander Khitry</h2>
      <h3 className="authorFace__job">Frontend developer</h3>
    </div>
  );
};

export default AuthorFace;

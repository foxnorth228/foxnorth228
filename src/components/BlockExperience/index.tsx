import React from 'react';
import './style.scss';
import lang from './lang';
import AddInfoBlock from '@components/ContainerAddInfo';
import useLanguage from '@hooks/useLanguage';

const ExperienceBlock = () => {
  const langType = useLanguage();
  return (
    <AddInfoBlock
      title={lang[langType].titleExp}
      titleSize="experienceBlock__title"
      className="experienceBlock"
    >
      <p>{lang[langType].text}</p>
      <a
        className="experienceBlock__link"
        href="https://master--moonlit-sprite-20c9ef.netlify.app/"
      >
        {lang[langType].link}
      </a>
    </AddInfoBlock>
  );
};

export default ExperienceBlock;

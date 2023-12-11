import React from 'react';
import './style.scss';
import lang from './lang';
import ContainerAddInfo from '@components/ContainerAddInfo';
import useLanguage from '@hooks/useLanguage';
import config from '@components/BlockExperience/config';

const ExperienceBlock = () => {
  const langType = useLanguage();
  return (
    <ContainerAddInfo title={lang[langType].title}>
      <p>{lang[langType].text}</p>
      <a className="blockExperience__link" href={config.linkPortfolio}>
        {lang[langType].link}
      </a>
    </ContainerAddInfo>
  );
};

export default ExperienceBlock;

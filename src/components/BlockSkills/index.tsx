import React from 'react';
import './style.scss';
import ContainerInfo from '@components/ContainerInfo';
import lang from './lang';
import useLanguage from '@hooks/useLanguage';
import config from './config';

const SkillsBlock = () => {
  const langType = useLanguage();
  return (
    <ContainerInfo title={lang[langType].titleSkillsBlock}>
      <ul className="blockSkills__list">
        {config.skills.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </ContainerInfo>
  );
};

export default SkillsBlock;

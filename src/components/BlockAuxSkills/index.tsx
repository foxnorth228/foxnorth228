import React, { useMemo } from 'react';
import './style.scss';
import ContainerInfo from '@components/ContainerInfo';
import lang from './lang';
import useLanguage from '@hooks/useLanguage';
import config from './config';

const AuxSkillsBlock = () => {
  const langType = useLanguage();
  const skills = useMemo(() => [...config.skills, `${lang[langType].english} (B2)`], [langType]);
  return (
    <ContainerInfo title={lang[langType].title}>
      <ul className="auxSkillsBlock__list">
        {skills.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </ContainerInfo>
  );
};

export default AuxSkillsBlock;

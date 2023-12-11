import React from 'react';
import './style.scss';
import ContainerInfo from '@components/ContainerInfo';
import lang from './lang';
import useLanguage from '@hooks/useLanguage';

const SkillsBlock = () => {
  const langType = useLanguage();
  return (
    <ContainerInfo
      title={lang[langType].titleSkillsBlock}
      titleSize="skillsBlock__title"
      className="skillsBlock"
    >
      <ul className="skillsBlock__list">
        <li className="skillsBlock__elem">HTML/CSS</li>
        <li>JavaScript, TypeScript</li>
        <li>React (React hooks)</li>
        <li>Redux</li>
        <li>SASS/SCSS</li>
      </ul>
    </ContainerInfo>
  );
};

export default SkillsBlock;

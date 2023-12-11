import React from 'react';
import './style.scss';
import ContainerInfo from '@components/ContainerInfo';
import lang from './lang';
import useLanguage from '@hooks/useLanguage';

const AuxSkillsBlock = () => {
  const langType = useLanguage();
  return (
    <ContainerInfo
      title={lang[langType].title}
      titleSize="auxSkillsBlock__title"
      className="auxSkillsBlock"
    >
      <ul className="auxSkillsBlock__list">
        <li>Git, Linux</li>
        <li>Eslint, Prettier</li>
        <li>Webpack</li>
        <li>Npm, Yarn</li>
        <li>Jest, Cypress</li>
        <li>Styled-components</li>
        <li>{lang[langType].english}(B2)</li>
      </ul>
    </ContainerInfo>
  );
};

export default AuxSkillsBlock;

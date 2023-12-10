import React from 'react';
import './aux-skills-block.scss';
import InfoBlock from '../info-block/info-block';
import useLanguage from '@src/hooks/useLanguage';

const AuxSkillsBlock = () => {
  const locale = useLanguage('aux-skills');
  return (
    <InfoBlock
      title={locale.titleAuxSkills}
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
        <li>{locale.english}(B2)</li>
      </ul>
    </InfoBlock>
  );
};

export default AuxSkillsBlock;

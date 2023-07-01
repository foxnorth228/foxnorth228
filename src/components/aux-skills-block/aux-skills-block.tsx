import React from 'react';
import './aux-skills-block.scss';
import InfoBlock from '../info-block/info-block';

const AuxSkillsBlock = () => {
  return (
    <InfoBlock
      title="Auxiliary skills"
      titleSize="auxSkillsBlock__title"
      className="auxSkillsBlock"
    >
      <ul className="auxSkillsBlock__list">
        <li>Git</li>
        <li>Linux</li>
        <li>Webpack</li>
        <li>Npm</li>
        <li>English(B2)</li>
      </ul>
    </InfoBlock>
  );
};

export default AuxSkillsBlock;

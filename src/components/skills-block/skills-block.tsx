import React from 'react';
import './skills-block.scss';
import InfoBlock from '../info-block/info-block';

const SkillsBlock = () => {
  return (
    <InfoBlock title="Skills" titleSize="skillsBlock__title" className="skillsBlock">
      <ul className="skillsBlock__list">
        <li className="skillsBlock__elem">HTML/CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>SASS/SCSS</li>
      </ul>
    </InfoBlock>
  );
};

export default SkillsBlock;

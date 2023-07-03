import React from 'react';
import './skills-block.scss';
import InfoBlock from '../info-block/info-block';
import useLanguage from '@src/hooks/useLanguage';

const SkillsBlock = () => {
  const locale = useLanguage('skills');
  return (
    <InfoBlock
      title={locale.titleSkillsBlock}
      titleSize="skillsBlock__title"
      className="skillsBlock"
    >
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

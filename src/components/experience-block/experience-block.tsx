import React from 'react';
import './experience-block.scss';
import useLanguage from '@src/hooks/useLanguage';
import AddInfoBlock from '../add-info-block/add-info-block';

const ExperienceBlock = () => {
  const locale = useLanguage('experience');
  return (
    <AddInfoBlock
      title={locale.titleExp}
      titleSize="experienceBlock__title"
      className="experienceBlock"
    >
      <p>{locale.text}</p>
      <a
        className="experienceBlock__link"
        href="https://master--moonlit-sprite-20c9ef.netlify.app/"
      >
        {locale.link}
      </a>
    </AddInfoBlock>
  );
};

export default ExperienceBlock;

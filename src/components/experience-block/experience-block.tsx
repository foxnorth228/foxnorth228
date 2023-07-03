import React from 'react';
import './experience-block.scss';
import InfoBlock from '../info-block/info-block';
import useLanguage from '@src/hooks/useLanguage';

const ExperienceBlock = () => {
  const locale = useLanguage('experience');
  return (
    <InfoBlock
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
    </InfoBlock>
  );
};

export default ExperienceBlock;

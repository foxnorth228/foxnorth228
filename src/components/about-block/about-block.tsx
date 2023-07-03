import React from 'react';
import './about-block.scss';
import InfoBlock from '../info-block/info-block';
import useLanguage from '@src/hooks/useLanguage';

const AboutBlock = () => {
  const locale = useLanguage('aboutme');
  return (
    <InfoBlock title={locale.titleAbout} titleSize="aboutBlock__title" className="aboutBlock">
      <p>{locale.text}</p>
    </InfoBlock>
  );
};

export default AboutBlock;

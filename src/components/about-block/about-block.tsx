import React from 'react';
import './about-block.scss';
import useLanguage from '@src/hooks/useLanguage';
import AddInfoBlock from '@components/add-info-block/add-info-block';

const AboutBlock = () => {
  const locale = useLanguage('aboutme');
  return (
    <AddInfoBlock title={locale.titleAbout} titleSize="aboutBlock__title" className="aboutBlock">
      <p>{locale.text}</p>
    </AddInfoBlock>
  );
};

export default AboutBlock;

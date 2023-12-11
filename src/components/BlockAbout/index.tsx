import React from 'react';
import lang from './lang';
import AddInfoBlock from '@components/ContainerAddInfo';
import useLanguage from '@hooks/useLanguage';

const AboutBlock = () => {
  const langType = useLanguage();
  return (
    <AddInfoBlock title={lang[langType].title} titleSize="aboutBlock__title" className="aboutBlock">
      <p>{lang[langType].text}</p>
    </AddInfoBlock>
  );
};

export default AboutBlock;

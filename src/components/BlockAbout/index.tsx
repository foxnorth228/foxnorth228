import React from 'react';
import lang from './lang';
import ContainerAddInfo from '@components/ContainerAddInfo';
import useLanguage from '@hooks/useLanguage';

const AboutBlock = () => {
  const langType = useLanguage();
  return (
    <ContainerAddInfo title={lang[langType].title}>
      <p>{lang[langType].text}</p>
    </ContainerAddInfo>
  );
};

export default AboutBlock;

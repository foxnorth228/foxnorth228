import React from 'react';
import './info-layout.scss';
import AuthorFace from '@components/authorFace/authorFace';
import BasicInfoBlock from '@components/basic-info-block/basic-info-block';

const InfoBlock = () => {
  return (
    <section className="basicInfo">
      <AuthorFace />
      <BasicInfoBlock />
    </section>
  );
};

export default InfoBlock;

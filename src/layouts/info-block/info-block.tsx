import React from 'react';
import './info-block.scss';
import AuthorFace from '@components/authorFace/authorFace';

const InfoBlock = () => {
  return (
    <section className="basicInfo">
      <AuthorFace />
    </section>
  );
};

export default InfoBlock;

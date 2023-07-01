import React from 'react';
import './info-layout.scss';
import AuthorFace from '@components/authorFace/authorFace';
import BasicInfoBlock from '@components/basic-info-block/basic-info-block';
import SkillsBlock from '@src/components/skills-block/skills-block';

const InfoBlock = () => {
  return (
    <section className="basicInfo">
      <AuthorFace />
      <BasicInfoBlock />
      <SkillsBlock />
    </section>
  );
};

export default InfoBlock;

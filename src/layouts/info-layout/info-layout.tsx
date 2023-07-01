import React from 'react';
import './info-layout.scss';
import AuthorFace from '@components/authorFace/authorFace';
import BasicInfoBlock from '@components/basic-info-block/basic-info-block';
import SkillsBlock from '@src/components/skills-block/skills-block';
import AuxSkillsBlock from '@src/components/aux-skills-block/aux-skills-block';

const InfoBlock = () => {
  return (
    <section className="basicInfo">
      <AuthorFace />
      <BasicInfoBlock />
      <SkillsBlock />
      <AuxSkillsBlock />
    </section>
  );
};

export default InfoBlock;

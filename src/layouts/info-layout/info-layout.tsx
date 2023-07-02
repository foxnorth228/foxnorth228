import React from 'react';
import './info-layout.scss';
import AuthorFace from '@components/authorFace/authorFace';
import BasicInfoBlock from '@components/basic-info-block/basic-info-block';
import SkillsBlock from '@src/components/skills-block/skills-block';
import AuxSkillsBlock from '@src/components/aux-skills-block/aux-skills-block';
import ContactsBlock from '@src/components/contacts-block/contacts-block';

const InfoLayout = () => {
  return (
    <section className="basicInfo">
      <AuthorFace />
      <BasicInfoBlock />
      <SkillsBlock />
      <AuxSkillsBlock />
      <ContactsBlock />
    </section>
  );
};

export default InfoLayout;

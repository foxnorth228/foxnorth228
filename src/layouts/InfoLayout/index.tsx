import React from 'react';
import './style.scss';
import AuthorFace from '@components/AuthorFace';
import BasicInfoBlock from '@components/BlockBasicInfo';
import SkillsBlock from '@components/BlockSkills';
import AuxSkillsBlock from '@components/BlockAuxSkills';
import ContactsBlock from '@components/BlockContacts';

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

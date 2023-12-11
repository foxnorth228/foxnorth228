import React from 'react';
import './style.scss';
import AboutBlock from '@components/BlockAbout';
import EducationBlock from '@components/BlockEducation';
import ExperienceBlock from '@components/BlockExperience';
import AddEducationBlock from '@components/BlockAddEducation';

const AddInfoLayout = () => {
  return (
    <section className="workInfo">
      <AboutBlock />
      <EducationBlock />
      <ExperienceBlock />
      <AddEducationBlock />
    </section>
  );
};

export default AddInfoLayout;

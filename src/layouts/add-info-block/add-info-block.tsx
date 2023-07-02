import React from 'react';
import './add-info-block.scss';
import AboutBlock from '@src/components/about-block/about-block';
import EducationBlock from '@src/components/education-block/education-block';
import ExperienceBlock from '@src/components/experience-block/experience-block';
import AddEducationBlock from '@src/components/add-education-block/add-education-block';

const AddInfoBlock = () => {
  return (
    <section className="workInfo">
      <AboutBlock />
      <EducationBlock />
      <ExperienceBlock />
      <AddEducationBlock />
    </section>
  );
};

export default AddInfoBlock;

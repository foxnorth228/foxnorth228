import React from 'react';
import './add-info-block.scss';
import AboutBlock from '@src/components/about-block/about-block';
import EducationBlock from '@src/components/education-block/education-block';
import ExperienceBlock from '@src/components/experience-block/experience-block';

const AddInfoBlock = () => {
  return (
    <section className="workInfo">
      <AboutBlock />
      <EducationBlock />
      <ExperienceBlock />
    </section>
  );
};

export default AddInfoBlock;

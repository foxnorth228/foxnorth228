import React from 'react';
import './add-info-block.scss';
import AboutBlock from '@src/components/about-block/about-block';
import EducationBlock from '@src/components/education-block/education-block';

const AddInfoBlock = () => {
  return (
    <section className="workInfo">
      <AboutBlock />
      <EducationBlock />
    </section>
  );
};

export default AddInfoBlock;

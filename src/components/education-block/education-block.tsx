import React from 'react';
import './education-block.scss';
import useLanguage from '@src/hooks/useLanguage';
import AddInfoBlock from '../add-info-block/add-info-block';

const EducationBlock = () => {
  const locale = useLanguage('education');
  return (
    <AddInfoBlock
      title={locale.titleEducBlock}
      titleSize="educationBlock__title"
      className="educationBlock"
    >
      <div className="educationBlock__elem">
        <p className="educationBlock__year">2020-2025</p>
        <div className="educationBlock__desc">
          <p className="educationBlock__univer">{locale.univer1}</p>
          <p className="educationBlock__educType">{locale.educType1}</p>
          <p className="educationBlock__spec">{locale.spec1}</p>
        </div>
      </div>
    </AddInfoBlock>
  );
};

export default EducationBlock;

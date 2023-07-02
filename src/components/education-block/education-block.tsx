import React from 'react';
import './education-block.scss';
import InfoBlock from '../info-block/info-block';

const EducationBlock = () => {
  return (
    <InfoBlock title="Education" titleSize="educationBlock__title" className="educationBlock">
      <div className="educationBlock__elem">
        <p className="educationBlock__year">2020-2025</p>
        <div className="educationBlock__desc">
          <p className="educationBlock__univer">
            Belarusian State University of Informatics and Radioelectronics (BSUIR)
          </p>
          <p className="educationBlock__educType">Incomplete higher education</p>
          <p className="educationBlock__spec">Software engineer</p>
        </div>
      </div>
    </InfoBlock>
  );
};

export default EducationBlock;

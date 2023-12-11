import React from 'react';
import './style.scss';
import lang from './lang';
import AddInfoBlock from '@components/ContainerAddInfo';
import useLanguage from '@hooks/useLanguage';

const EducationBlock = () => {
  const langType = useLanguage();
  return (
    <AddInfoBlock
      title={lang[langType].titleEducBlock}
      titleSize="educationBlock__title"
      className="educationBlock"
    >
      <div className="educationBlock__elem">
        <p className="educationBlock__year">2020-2025</p>
        <div className="educationBlock__desc">
          <p className="educationBlock__univer">{lang[langType].univer1}</p>
          <p className="educationBlock__educType">{lang[langType].educType1}</p>
          <p className="educationBlock__spec">{lang[langType].spec1}</p>
        </div>
      </div>
    </AddInfoBlock>
  );
};

export default EducationBlock;

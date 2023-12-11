import React from 'react';
import './style.scss';
import lang from './lang';
import ContainerAddInfo from '@components/ContainerAddInfo';
import useLanguage from '@hooks/useLanguage';

const EducationBlock = () => {
  const langType = useLanguage();
  return (
    <ContainerAddInfo title={lang[langType].title}>
      {lang[langType].education.map((el, i) => (
        <div key={i} className="blockEducation__elem">
          <p className="blockEducation__year">{el.year}</p>
          <div className="blockEducation__desc">
            <p className="blockEducation__univer">{el.university}</p>
            <p className="blockEducation__educType">{el.educType}</p>
            <p className="blockEducation__spec">{el.specialization}</p>
          </div>
        </div>
      ))}
    </ContainerAddInfo>
  );
};

export default EducationBlock;

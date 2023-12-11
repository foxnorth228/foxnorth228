import React from 'react';
import './style.scss';
import ContainerAddInfo from '@components/ContainerAddInfo';
import config from './config';
import lang from './lang';
import useLanguage from '@hooks/useLanguage';

const AddEducationBlock = () => {
  const langType = useLanguage();
  return (
    <ContainerAddInfo title={lang[langType].title}>
      {config.courses.map((el, i) => (
        <div key={i} className="blockAddEduc__elem">
          <p className="blockAddEduc__year">{el.year}</p>
          <div className="blockAddEduc__desc">
            <a href={el.link} className="blockAddEduc__link">
              <p className="blockAddEduc__course">{el.title}</p>
            </a>
            <p className="blockAddEduc__courseType">{el.description}</p>
          </div>
        </div>
      ))}
    </ContainerAddInfo>
  );
};

export default AddEducationBlock;

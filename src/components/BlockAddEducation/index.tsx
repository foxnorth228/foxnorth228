import React from 'react';
import './style.scss';
import AddInfoBlock from '@components/ContainerAddInfo';
import courses from './courses';
import lang from './lang';

const AddEducationBlock = () => {
  return (
    <AddInfoBlock title={lang.en.title} titleSize="addEducBlock__title" className="addEducBlock">
      {courses.map((el, i) => (
        <div key={i} className="addEducBlock__elem">
          <p className="addEducBlock__year">{el[0]}</p>
          <div className="addEducBlock__desc">
            <a href={el[3]} className="addEducBlock__link">
              <p className="addEducBlock__course">{el[1]}</p>
            </a>
            <p className="addEducBlock__courseType">{el[2]}</p>
          </div>
        </div>
      ))}
    </AddInfoBlock>
  );
};

export default AddEducationBlock;

import React from 'react';
import './add-education-block.scss';
import useLanguage from '@src/hooks/useLanguage';
import AddInfoBlock from '../add-info-block/add-info-block';

const AddEducationBlock = () => {
  const locale = useLanguage('add-educ');
  const addeduc = [
    [
      '2023',
      'React (RS School)',
      'The Rolling Scopes, Frontend React developer',
      'https://app.rs.school/certificate/bxomjisx',
    ],
    [
      '2023',
      'CSS Basics',
      'Part of W3C\'s "Front-End Web Developer"',
      'https://courses.edx.org/certificates/5b7f2509028c42e195d509f5f74a8c89',
    ],
    [
      '2022',
      'NODE.JS (RS School)',
      'The Rolling Scopes, Backend developer',
      'https://app.rs.school/certificate/6lznoe0h',
    ],
  ];
  return (
    <AddInfoBlock
      title={locale.titleAddEduc}
      titleSize="addEducBlock__title"
      className="addEducBlock"
    >
      {addeduc.map((el, i) => (
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

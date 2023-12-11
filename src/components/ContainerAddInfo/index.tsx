import React from 'react';
import './style.scss';
import { IInfoBlock } from './types';
import useLanguage from '@hooks/useLanguage';

const AddInfoBlock = ({ title, titleSize, className, children }: IInfoBlock) => {
  const langType = useLanguage();
  return (
    <div className={`addInfoBlock ${className}`}>
      <h3 className={`addInfoBlock__title ${titleSize}`}>{title}</h3>
      <div className="addInfoBlock__line"></div>
      {children}
    </div>
  );
};

export default AddInfoBlock;

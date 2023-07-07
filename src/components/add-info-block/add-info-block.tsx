import React from 'react';
import './add-info-block.scss';

interface IInfoBlock {
  title: string;
  titleSize: string;
  className: string;
  children: React.ReactNode;
}

const AddInfoBlock = ({ title, titleSize, className, children }: IInfoBlock) => {
  return (
    <div className={`addInfoBlock ${className}`}>
      <h3 className={`addInfoBlock__title ${titleSize}`}>{title}</h3>
      <div className="addInfoBlock__line"></div>
      {children}
    </div>
  );
};

export default AddInfoBlock;

import React from 'react';
import './info-block.scss';

interface IInfoBlock {
  title: string;
  titleSize: string;
  className: string;
  children: React.ReactNode;
}

const InfoBlock = ({ title, titleSize, className, children }: IInfoBlock) => {
  return (
    <div className={`infoBlock ${className}`}>
      <h3 className={`infoBlock__title ${titleSize}`}>{title}</h3>
      <div className="infoBlock__line"></div>
      {children}
    </div>
  );
};

export default InfoBlock;

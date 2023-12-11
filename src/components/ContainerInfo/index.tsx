import React from 'react';
import './style.scss';
import { IInfoBlock } from './types';

const ContainerInfo = ({ title, titleSize, className, children }: IInfoBlock) => {
  return (
    <div className={`infoBlock ${className}`}>
      <h3 className={`infoBlock__title ${titleSize}`}>{title}</h3>
      <div className="infoBlock__line"></div>
      {children}
    </div>
  );
};

export default ContainerInfo;

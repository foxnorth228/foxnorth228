import React from 'react';
import './style.scss';
import { IInfoBlock } from './types';

const ContainerAddInfo = ({ title, children }: IInfoBlock) => {
  return (
    <div className="containerAddInfo">
      <h3 className="containerAddInfo__title">{title}</h3>
      <div className="containerAddInfo__line"></div>
      {children}
    </div>
  );
};

export default ContainerAddInfo;

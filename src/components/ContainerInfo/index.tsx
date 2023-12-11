import React from 'react';
import './style.scss';
import { IInfoBlock } from './types';

const ContainerInfo = ({ title, children }: IInfoBlock) => {
  return (
    <div className="containerInfo">
      <h3 className="containerInfo__title">{title}</h3>
      <div className="containerInfo__line"></div>
      {children}
    </div>
  );
};

export default ContainerInfo;

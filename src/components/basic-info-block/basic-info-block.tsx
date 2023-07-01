import React from 'react';
import './basic-info-block.scss';

const BasicInfoBlock = () => {
  return (
    <div className="basicInfo__block">
      <h3 className="basicInfo__title">Basic info</h3>
      <div className="basicInfo__line"></div>
      <div className="basicInfo__columns">
        <div className="basicInfo__column basicInfo__column_titles">
          <p>Name</p>
          <p>Birthday</p>
          <p>Phone</p>
          <p>Email</p>
          <p>Address</p>
        </div>
        <div className="basicInfo__column basicInfo__column_values">
          <p>{process.env.NAME}</p>
          <p>{process.env.BIRTHDAY}</p>
          <p>{process.env.PHONE}</p>
          <p>{process.env.EMAIL}</p>
          <p>{process.env.ADDRESS}</p>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoBlock;

import React from 'react';
import './basic-info-block.scss';
import InfoBlock from '../info-block/info-block';

const BasicInfoBlock = () => {
  return (
    <InfoBlock title="Basic info" titleSize="basicInfo__title" className="basicInfo__block">
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
    </InfoBlock>
  );
};

export default BasicInfoBlock;

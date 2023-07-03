import React from 'react';
import './basic-info-block.scss';
import InfoBlock from '../info-block/info-block';
import useLanguage from '@hooks/useLanguage';

const BasicInfoBlock = () => {
  const locale = useLanguage('basic-info');
  return (
    <InfoBlock
      title={locale.titleBasicInfo}
      titleSize="basicInfo__title"
      className="basicInfo__block"
    >
      <div className="basicInfo__columns">
        <div className="basicInfo__column basicInfo__column_titles">
          <p>{locale.titleName}</p>
          <p>{locale.titleBirthday}</p>
          <p>{locale.titlePhone}</p>
          <p>{locale.titleEmail}</p>
          <p>{locale.titleAddress}</p>
          <p>{locale.titleNativeLang}</p>
        </div>
        <div className="basicInfo__column basicInfo__column_values">
          <p>{locale.name}</p>
          <p>{locale.birthday}</p>
          <p>{process.env.PHONE}</p>
          <p>{process.env.EMAIL}</p>
          <p>{locale.address}</p>
          <p>{locale.nativeLang}</p>
        </div>
      </div>
    </InfoBlock>
  );
};

export default BasicInfoBlock;

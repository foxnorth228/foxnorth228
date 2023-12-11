import React from 'react';
import './style.scss';
import ContainerInfo from '@components/ContainerInfo';
import lang from './lang';
import useLanguage from '@hooks/useLanguage';
import config from '@components/BlockBasicInfo/config';

const BasicInfoBlock = () => {
  const langType = useLanguage();
  return (
    <ContainerInfo title={lang[langType].titleBasicInfo}>
      <div className="blockBasicInfo__columns">
        <div className="blockBasicInfo__column blockBasicInfo__column_titles">
          <p>{lang[langType].titleName}</p>
          <p>{lang[langType].titleBirthday}</p>
          <p>{lang[langType].titlePhone}</p>
          <p>{lang[langType].titleEmail}</p>
          <p>{lang[langType].titleAddress}</p>
          <p>{lang[langType].titleNativeLang}</p>
        </div>
        <div className="blockBasicInfo__column blockBasicInfo__column_values">
          <p>{lang[langType].name}</p>
          <p>{lang[langType].birthday}</p>
          <p>{config.phone}</p>
          <p>{config.mail}</p>
          <p>{lang[langType].address}</p>
          <p>{lang[langType].nativeLang}</p>
        </div>
      </div>
    </ContainerInfo>
  );
};

export default BasicInfoBlock;

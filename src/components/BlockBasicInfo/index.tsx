import React from 'react';
import './style.scss';
import ContainerInfo from '@components/ContainerInfo';
import lang from './lang';
import useLanguage from '@hooks/useLanguage';

const BasicInfoBlock = () => {
  const langType = useLanguage();
  return (
    <ContainerInfo
      title={lang[langType].titleBasicInfo}
      titleSize="basicInfoBlock__title"
      className="basicInfoBlock"
    >
      <div className="basicInfoBlock__columns">
        <div className="basicInfoBlock__column basicInfoBlock__column_titles">
          <p>{lang[langType].titleName}</p>
          <p>{lang[langType].titleBirthday}</p>
          <p>{lang[langType].titlePhone}</p>
          <p>{lang[langType].titleEmail}</p>
          <p>{lang[langType].titleAddress}</p>
          <p>{lang[langType].titleNativeLang}</p>
        </div>
        <div className="basicInfoBlock__column basicInfoBlock__column_values">
          <p>{lang[langType].name}</p>
          <p>{lang[langType].birthday}</p>
          <p>{'+375 (29) 267-75-41'}</p>
          <p>{'khitrii03@gmail.com'}</p>
          <p>{lang[langType].address}</p>
          <p>{lang[langType].nativeLang}</p>
        </div>
      </div>
    </ContainerInfo>
  );
};

export default BasicInfoBlock;

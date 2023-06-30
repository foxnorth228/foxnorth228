import React from 'react';
import './main.scss';
import BasicInfo from '@components/basicInfo/basicInfo';

const Main = () => {
  return (
    <main className="main">
      <BasicInfo />
      <div className="main__blueRect"></div>
    </main>
  );
};

export default Main;

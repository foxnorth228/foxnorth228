import React from 'react';
import './main.scss';
import InfoLayout from '@src/layouts/info-layout/info-layout';

const Main = () => {
  return (
    <main className="main">
      <InfoLayout />
      <div className="main__blueRect"></div>
    </main>
  );
};

export default Main;

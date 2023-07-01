import React from 'react';
import './main.scss';
import InfoBlock from '@src/layouts/info-layout/info-layout';

const Main = () => {
  return (
    <main className="main">
      <InfoBlock />
      <div className="main__blueRect"></div>
    </main>
  );
};

export default Main;

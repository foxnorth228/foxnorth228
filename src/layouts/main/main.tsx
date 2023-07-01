import React from 'react';
import './main.scss';
import InfoBlock from '@layouts/info-block/info-block';

const Main = () => {
  return (
    <main className="main">
      <InfoBlock />
      <div className="main__blueRect"></div>
    </main>
  );
};

export default Main;

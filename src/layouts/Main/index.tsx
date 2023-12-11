import React from 'react';
import './style.scss';
import InfoLayout from '@layouts/InfoLayout';

const Main = () => {
  return (
    <main className="main">
      <InfoLayout />
      <div className="main__blueRect"></div>
    </main>
  );
};

export default Main;

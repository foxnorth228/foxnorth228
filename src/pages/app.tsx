import React from 'react';
import './app.scss';
import Main from '@layouts/main/main';
import WorkInfo from '@layouts/aside/aside';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Main />
      <WorkInfo />
    </div>
  );
};

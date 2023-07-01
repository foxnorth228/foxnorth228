import React from 'react';
import './app.scss';
import Main from '@layouts/main/main';
import AddInfoBlock from '@layouts/add-info-block/add-info-block';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Main />
      <AddInfoBlock />
    </div>
  );
};

import React, { Fragment } from 'react';

import { Routes } from './routes';
import { GlobalStyle } from './styles';

declare global {
  interface Console {
    tron: any;
  }
}

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
};

export default App;

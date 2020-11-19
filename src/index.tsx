import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';

import GlobalStyles from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Landing />

    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root'),
);

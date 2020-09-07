import React from 'react';

import Header from './Header';
import HomePhoto from './HomePhoto';

import './global.css';

import ArrowRight from './img/arrow-right.svg';

function App() {
  return (
    <>
      <Header item={ArrowRight} value="/galery" />
      <HomePhoto />
    </>
  );
}

export default App;

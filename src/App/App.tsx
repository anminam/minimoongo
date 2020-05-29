import React from 'react';
import '../Styles/index.scss'

import Main from '../Containers/Main';
import TopADContainer from '../Containers/TopADContainer';
import Header from '../Containers/Header';

function App() {
  return (
    <div className="App">
      <TopADContainer />
      <Header />
      <Main />
    </div>
  );
}

export default App;

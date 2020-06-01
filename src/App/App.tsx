import React from 'react';
import '../Styles/index.scss'

import Main from '../Containers/Main';

import Header from '../Containers/Header';
import { HashRouter as Router } from "react-router-dom";
import TopBannerContainer from 'Components/TopBannerContainer';

function App() {
  return (
    <div className="App">
      <TopBannerContainer />
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;

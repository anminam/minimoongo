import React from 'react';
import '../Styles/index.scss'

import Main from '../Containers/Main';
import TopADContainer from '../Containers/TopADContainer';
import Header from '../Containers/Header';
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopADContainer />
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;

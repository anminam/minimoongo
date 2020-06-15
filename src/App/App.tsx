import React from "react";
import "../Styles/index.scss";

import Main from "../View/Containers/Main";

import Header from "../View/Containers/Header";
import { HashRouter as Router } from "react-router-dom";
import TopBannerContainer from "Components/TopBannerContainer";
import Footer from "View/Containers/Footer";
import TopInfoBar from "View/Containers/TopInfoBar";

function App() {
  return (
    <div className="App">
      <TopBannerContainer />
      <TopInfoBar />
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

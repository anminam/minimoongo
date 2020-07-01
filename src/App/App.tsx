import React, { useEffect } from "react";
import "../Styles/index.scss";

import Main from "../View/Containers/Main";

import Header from "../View/Containers/Header";
import { HashRouter as Router } from "react-router-dom";
import TopBannerContainer from "View/Components/TopBannerContainer";
import Footer from "View/Containers/Footer";
import TopInfoBar from "View/Containers/TopInfoBar";
import { useDispatch } from "react-redux";
import { goodsActions } from "Core/goods/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(goodsActions.initAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <TopBannerContainer />
      <Router>
        <TopInfoBar />
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

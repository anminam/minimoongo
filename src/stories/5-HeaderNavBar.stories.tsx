import React from 'react';
import HeaderNavBar from 'Containers/HeaderNavBar';
import { HashRouter as Router } from "react-router-dom";

export default {
  title: 'HeaderNavBar',
  component: HeaderNavBar,
};

export const Main = () => {
  return (
    <Router>
      <HeaderNavBar />
    </Router>
  )
}
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "Core/Store";
import { HashRouter as Router } from "react-router-dom";

export const CustomProvider = (Component: () => JSX.Element) => {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Component />
      </Router>
    </Provider>
  );
};

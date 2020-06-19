import React, { Children } from "react";
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

interface ICustomProvider1 {
  children: React.ReactNode;
}
export const CustomProvider1 = (props: ICustomProvider1) => {
  return (
    <Provider store={configureStore()}>
      <Router>{props.children}</Router>
    </Provider>
  );
};

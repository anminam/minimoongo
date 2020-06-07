import React from "react";
import AllCategoryMenu from "Components/AllCategoryMenu";
import { configureStore } from "Core/Store";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "AllCategoryMenu",
  component: AllCategoryMenu,
};

export const Main = () => {
  const { list } = configureStore().getState().nav;

  return (
    <Router>
      <AllCategoryMenu list={list} visible={true} />;
    </Router>
  );
};

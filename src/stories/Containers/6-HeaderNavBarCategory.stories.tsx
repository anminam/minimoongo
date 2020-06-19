import React from "react";
import AllCategoryMenu from "Components/AllCategoryMenu";
import { configureStore } from "Core/Store";
import { HashRouter as Router } from "react-router-dom";
import { CustomProvider, CustomProvider1 } from "CustomProvider";
const { list } = configureStore().getState().nav;

export default {
  title: "containers/AllCategoryMenu",
  component: AllCategoryMenu,
};

export const Main = () => {
  return (
    <CustomProvider1>
      <AllCategoryMenu list={list} visible={true} />
    </CustomProvider1>
  );
};

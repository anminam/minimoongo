import React from "react";
import HeaderNavBar from "View/Containers/HeaderNavBar";
import { CustomProvider } from "CustomProvider";

export default {
  title: "HeaderNavBar",
  component: HeaderNavBar,
};

export const Main = () => {
  return CustomProvider(() => {
    return <HeaderNavBar />;
  });
};

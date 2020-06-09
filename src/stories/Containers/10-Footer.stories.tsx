import React from "react";
import "Styles/index.scss";
import Footer from "View/Containers/Footer";
import { CustomProvider } from "CustomProvider";

export default {
  title: "containers/Footer",
  component: Footer,
};

export const Main = () => {
  return CustomProvider(() => {
    return <Footer />;
  });
};

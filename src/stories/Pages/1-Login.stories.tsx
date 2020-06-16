import React from "react";
import "Styles/index.scss";
import { CustomProvider } from "CustomProvider";
import { Login } from "Pages";

export default {
  title: "Pages/Login",
  component: Login,
};

export const Main = () => {
  return CustomProvider(() => {
    return <Login />;
  });
};

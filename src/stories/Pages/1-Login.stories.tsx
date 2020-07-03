import React from "react";
import "Styles/index.scss";
import { CustomProvider1 } from "CustomProvider";
import { Login } from "Pages";

export default {
  title: "Pages/Login",
  component: Login,
};

export const Main = () => {
  return (
    <CustomProvider1>
      <Login />
    </CustomProvider1>
  );
};

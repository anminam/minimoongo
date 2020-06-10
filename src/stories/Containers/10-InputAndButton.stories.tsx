import React from "react";
import "Styles/index.scss";
import { CustomProvider } from "CustomProvider";
import InputAndButton from "View/Containers/InputAndButton";

export default {
  title: "containers/InputAndButton.stories",
  component: InputAndButton,
};

export const Main = () => {
  return CustomProvider(() => {
    return <InputAndButton />;
  });
};

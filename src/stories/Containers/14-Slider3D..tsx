import React from "react";
import "Styles/index.scss";
import { CustomProvider } from "CustomProvider";
import { mainEventList } from "Core/data";
import Slider3D from "View/Containers/Slider/Slider3d";

export default {
  title: "containers/Slider3d",
  component: Slider3D,
};

export const Main = () => {
  return CustomProvider(() => {
    return <Slider3D list={mainEventList[1].list} />;
  });
};

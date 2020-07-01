import React from "react";
import "Styles/index.scss";
import { CustomProvider } from "CustomProvider";
import Slider from "View/Components/Slider";
import { mainEventList } from "Core/data";

export default {
  title: "containers/slider/Slider",
  component: Slider,
};

export const Main = () => {
  return CustomProvider(() => {
    return <Slider list={mainEventList[1].list} isDot={true} />;
  });
};

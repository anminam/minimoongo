import React from "react";
import "Styles/index.scss";
import { CustomProvider } from "CustomProvider";
import Slider3D from "View/Containers/Slider/Slider3D";
import { korbookHaveSliderEvent } from "Core/events/data";

export default {
  title: "containers/slider/Slider3d",
  component: Slider3D,
};

export const Main = () => {
  return CustomProvider(() => {
    return <Slider3D list={korbookHaveSliderEvent.list} />;
  });
};

import React from "react";
import "Styles/index.scss";
import { CustomProvider } from "CustomProvider";
import CategoryEventSlider from "View/Components/CategoryEventSlider";
import { korKookTopSliderEvent } from "Core/events/data";

export default {
  title: "containers/CategoryEventSlider",
  component: CategoryEventSlider,
};

export const Main = () => {
  return CustomProvider(() => {
    return <CategoryEventSlider obj={korKookTopSliderEvent} width={770} />;
  });
};

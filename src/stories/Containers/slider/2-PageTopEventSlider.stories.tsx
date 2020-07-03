import React from "react";
import "Styles/index.scss";
import { CustomProvider } from "CustomProvider";
import CategoryEventSlider from "View/Components/CategoryEventSlider";
import {
  korKookTopSliderEvent,
  otherBookTopSliderEvent,
} from "Core/events/data";

export default {
  title: "containers/slider/PageTopEventSlider",
  component: CategoryEventSlider,
};

export const Main = () => {
  return CustomProvider(() => {
    return (
      <div>
        <CategoryEventSlider obj={korKookTopSliderEvent} width={770} />
      </div>
    );
  });
};
export const OtherPage = () => {
  return CustomProvider(() => {
    return (
      <div>
        <CategoryEventSlider obj={otherBookTopSliderEvent} width={770} />
      </div>
    );
  });
};

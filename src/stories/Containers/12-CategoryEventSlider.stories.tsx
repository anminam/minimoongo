import React from "react";
import "Styles/index.scss";
import { CustomProvider } from "CustomProvider";
import { bookKorbookEvents } from "Core/data";
import CategoryEventSlider from "View/Components/CategoryEventSlider";

export default {
  title: "containers/CategoryEventSlider",
  component: CategoryEventSlider,
};

const imgPath = "assets/events/welcomes/categorywelcom/korbook/2020_06_23/";
export const Main = () => {
  return CustomProvider(() => {
    return (
      <CategoryEventSlider
        obj={bookKorbookEvents}
        imgPath={imgPath}
        width={690}
      />
    );
  });
};

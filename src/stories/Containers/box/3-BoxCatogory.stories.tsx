import React from "react";
import "Styles/index.scss";
import { korTodayBookSliderEvent, korBookBestSeller } from "Core/events/data";
import { CustomProvider1 } from "CustomProvider";
import Slider3DController from "View/Containers/Slider/Slider3DController";
import BoxCatogory from "View/Containers/Boxes/BoxCatogory";

export default {
  title: "containers/box/BoxCatogory",
  component: BoxCatogory,
};

export const main = () => {
  return (
    <CustomProvider1>
      <BoxCatogory eventObj={korBookBestSeller} isBorder={true} type={"tab"} />
    </CustomProvider1>
  );
};

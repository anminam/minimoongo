import React from "react";
import "Styles/index.scss";
import BoxNormal from "View/Containers/Boxes/BoxNormal";
import Slider3D from "View/Containers/Slider/Slider3D";
import { korTodayBookSliderEvent } from "Core/events/data";
import { CustomProvider } from "CustomProvider";
import Slider3DController from "View/Containers/Slider/Slider3DController";

export default {
  title: "containers/box/boxevent",
  component: BoxNormal,
};

export const main = () => {
  const event = korTodayBookSliderEvent;
  return CustomProvider(() => {
    return (
      <BoxNormal
        eventObj={{ title: event.displayName, id: event.id, href: event.href }}
      >
        <Slider3DController obj={korTodayBookSliderEvent.list[0]} />;
      </BoxNormal>
    );
  });
};
export const slider3d = () => {
  const { displayName, id, href } = korTodayBookSliderEvent;
  return CustomProvider(() => {
    return (
      <BoxNormal eventObj={{ title: displayName, id: id, href: href }}>
        <Slider3D list={korTodayBookSliderEvent.list[0].list} />
      </BoxNormal>
    );
  });
};
export const slider3dAndController = () => {
  return CustomProvider(() => {
    return <Slider3DController obj={korTodayBookSliderEvent.list[0]} />;
  });
};

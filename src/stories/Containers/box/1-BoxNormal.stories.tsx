import React from "react";
import "Styles/index.scss";
import BoxNormal from "View/Containers/Boxes/BoxNormal";
import Slider3D from "View/Containers/Slider/Slider3D";
import { korbookHaveSliderEvent } from "Core/events/data";
import { CustomProvider } from "CustomProvider";
import Slider3DController from "View/Containers/Slider/Slider3DController";

export default {
  title: "containers/box/boxnormal",
  component: BoxNormal,
};

export const main = () => {
  return (
    <BoxNormal eventObj={{ title: "a", id: "a", href: "/" }}>
      내용 내용이 길다 내용이 많이길다 길다길다맨
    </BoxNormal>
  );
};
export const slider3d = () => {
  const { displayName, id, href } = korbookHaveSliderEvent;
  return CustomProvider(() => {
    return (
      <BoxNormal eventObj={{ title: displayName, id: id, href: href }}>
        <Slider3D list={korbookHaveSliderEvent.list} />
      </BoxNormal>
    );
  });
};
export const slider3dAndController = () => {
  return CustomProvider(() => {
    return <Slider3DController obj={korbookHaveSliderEvent} />;
  });
};

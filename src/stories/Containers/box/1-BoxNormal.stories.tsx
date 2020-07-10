import React from "react";
import "Styles/index.scss";
import BoxNormal from "View/Containers/Boxes/BoxNormal";
import Slider3D from "View/Containers/Slider/Slider3D";
import { korTodayBookSliderEvent } from "Core/events/data";
import { CustomProvider } from "CustomProvider";
import Slider3DController from "View/Containers/Slider/Slider3DController";

export default {
  title: "containers/box/boxnormal",
  component: BoxNormal,
};

export const main = () => {
  return (
    <BoxNormal
      eventObj={{ displayName: "d타이틀", id: "i아이디", href: "/", list: [] }}
    >
      내용 내용이 길다 내용이 많이길다 길다길다맨
    </BoxNormal>
  );
};
export const slider3d = () => {
  const { displayName, id, href } = korTodayBookSliderEvent;
  return CustomProvider(() => {
    return (
      <BoxNormal
        eventObj={{ displayName: displayName, id: id, href: href, list: [] }}
      >
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

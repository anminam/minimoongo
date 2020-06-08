import React from "react";
import BoxWelcome1 from "View/Containers/Boxes/BoxWelcome1";
import "Styles/index.scss";
import { event1 } from "Core/events/data";

export default {
  title: "Box",
  component: BoxWelcome1,
};

export const Main = () => {
  return <BoxWelcome1 eventObj={event1} />;
};

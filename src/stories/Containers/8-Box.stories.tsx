import React from "react";
import BoxWelcome1 from "View/Containers/Boxes/BoxWelcome1";
import "Styles/index.scss";
import { event1, eventPicks } from "Core/events/data";
import BoxWelcomePicks from "View/Containers/Boxes/BoxWelcomePicks";

export default {
  title: "containers/Box",
  component: BoxWelcome1,
};

export const normarBox = () => {
  return <BoxWelcome1 eventObj={event1} />;
};
export const picksBox = () => {
  return (
    <>
      <BoxWelcomePicks eventObj={eventPicks} />
      <BoxWelcomePicks eventObj={eventPicks} />
    </>
  );
};

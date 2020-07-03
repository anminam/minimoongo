import React from "react";
import WelcomeMainEvent from "View/Containers/Welcomes/WelcomeMainEvent";
import "Styles/index.scss";

import { mainEventList } from "Core/data";

export default {
  title: "containers/WelcomeMainEvent",
  component: WelcomeMainEvent,
};

export const Main = () => <WelcomeMainEvent list={mainEventList} />;

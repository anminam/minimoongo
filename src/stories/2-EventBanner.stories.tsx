import React from 'react';
import WelcomeMainEvent from 'Containers/Welcomes/WelcomeMainEvent';
import "Styles/index.scss";

import { mainEventList } from 'Core/StaticData';

export default {
  title: 'WelcomeMainEvent',
  component: WelcomeMainEvent,
};

export const Main = () => (
  <WelcomeMainEvent list={mainEventList}/>
);

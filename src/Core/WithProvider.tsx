import React from "react";
import { Provider } from "react-redux";

import { configureStore } from "Core/Store";

type StoryFunctionType = () => React.ReactNode;

export const WithProvider = (reduxStore = configureStore()) => (
  storyFn: StoryFunctionType
) => {
  return <Provider store={reduxStore}>{storyFn()}</Provider>;
};

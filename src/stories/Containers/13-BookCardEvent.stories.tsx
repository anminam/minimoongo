import React from "react";
import "Styles/index.scss";
import { CustomProvider } from "CustomProvider";
import BookCardEvent from "View/Containers/Cards/BookCardEvent";
import { korTodayBookSliderEvent } from "Core/events/data";

export default {
  title: "containers/BookCardEvent",
  component: BookCardEvent,
};

const obj = korTodayBookSliderEvent.list[0].list[0];

export const Main = () => {
  return CustomProvider(() => {
    return <BookCardEvent obj={obj} />;
  });
};

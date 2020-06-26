import React from "react";
import "Styles/index.scss";
import { CustomProvider } from "CustomProvider";
import { bookKorbookEvents } from "Core/data";
import CategoryEventSlider from "Components/CategoryEventSlider";
import BookCardEvent from "View/Containers/Cards/BookCardEvent";
import { ILink } from "Interfaces/ILink";
import { korbookHaveSliderEvent } from "Core/events/data";

export default {
  title: "containers/BookCardEvent",
  component: BookCardEvent,
};

const obj = korbookHaveSliderEvent.list[0];

export const Main = () => {
  return CustomProvider(() => {
    return <BookCardEvent obj={obj} />;
  });
};

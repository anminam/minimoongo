import React from "react";
import "Styles/index.scss";
import { CustomProvider } from "CustomProvider";
import { bookKorbookEvents } from "Core/data";
import CategoryEventSlider from "Components/CategoryEventSlider";
import BookCardEvent from "View/Containers/Cards/BookCardEvent";

export default {
  title: "containers/BookCardEvent",
  component: BookCardEvent,
};

const imgPath = "assets/events/welcomes/categorywelcom/korbook/2020_06_23/";
export const Main = () => {
  return CustomProvider(() => {
    return (
      <BookCardEvent
        id={"asdf"}
        src={"asdf"}
        path={"asdf"}
        displayName={"displayName"}
        href={"asdf"}
      />
    );
  });
};

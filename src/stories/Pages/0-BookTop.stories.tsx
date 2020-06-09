import React from "react";
import "Styles/index.scss";
import { CustomProvider } from "CustomProvider";
import BookTop from "View/Containers/Products/Book/BookTop";

export default {
  title: "books/BookTop",
  component: BookTop,
};

export const Main = () => {
  return CustomProvider(() => {
    return <BookTop id={"9791190382175"} />;
  });
};

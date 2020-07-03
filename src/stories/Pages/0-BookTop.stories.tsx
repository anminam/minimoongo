import React from "react";
import "Styles/index.scss";
import { CustomProvider, CustomProvider1 } from "CustomProvider";
import BookTop from "View/Containers/Products/Book/BookTop";

export default {
  title: "Pages/BookTop",
  component: BookTop,
};

export const Main = () => {
  return (
    <CustomProvider1>
      <BookTop id={"l9791190382175"} />;
    </CustomProvider1>
  );
};

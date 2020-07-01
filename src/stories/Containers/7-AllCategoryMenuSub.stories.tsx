import React from "react";
import AllCategoryMenuSub from "View/Components/AllCategoryMenuSub";
import { CustomProvider } from "CustomProvider";

export default {
  title: "containers/AllCategoryMenuSub",
  component: AllCategoryMenuSub,
};

export const korbook = () => {
  return CustomProvider(() => {
    return <AllCategoryMenuSub navCategoryId={"korbook"} />;
  });
};
export const otherBook = () => {
  return CustomProvider(() => {
    return <AllCategoryMenuSub navCategoryId={"otherbook"} />;
  });
};

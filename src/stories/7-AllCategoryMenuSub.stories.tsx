import React from "react";
import AllCategoryMenuSub from "Components/AllCategoryMenuSub";
import { CustomProvider } from "CustomProvider";

export default {
  title: "AllCategoryMenuSub",
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

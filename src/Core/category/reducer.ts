import { categoryActions } from "./actions";
import { ActionType } from "typesafe-actions";
import { CategoryData } from "./data";

type CategoryAction = ActionType<typeof categoryActions>;

export const categoryReducer = (
  state = CategoryData,
  action: CategoryAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

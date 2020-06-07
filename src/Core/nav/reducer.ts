import { navActions } from "./actions";
import { IMainCategory } from "Interfaces/IMainCategory";
import { ActionType } from "typesafe-actions";
import { NavData } from "./data";

export interface INavReducer {
  list: IMainCategory[];
}

type NavAction = ActionType<typeof navActions>;

export const navReducer = (state = new NavData(), action: NavAction) => {
  switch (action.type) {
    case navActions.LALLALALAL:
      return state;
    case navActions.LALLALALAL1:
      return state;
    default:
      return state;
  }
};

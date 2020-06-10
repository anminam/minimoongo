import { Record } from "immutable";
import { browserActions } from "./actions";
import { ActionType } from "typesafe-actions";

export interface ICategoryReducer {
  media: string;
}

type BrowserActions = ActionType<typeof browserActions>;

export const browserData: Record.Factory<ICategoryReducer> = Record({
  media: "1",
});

export function browserReducer(
  state = new browserData(),
  action: BrowserActions
) {
  switch (action.type) {
    case browserActions.MEDIA_QUERY_CHANGED:
      return state.set("media", action.payload.results);
    default:
      return state;
  }
}

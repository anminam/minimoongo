import { ActionType } from "typesafe-actions";

export const coreActions = {
  SET_VISIBLE_TOP_BANNER: "SET_VISIBLE_TOP_BANNER" as const,

  setIsVisibleTopBanner: (results: boolean) => ({
    type: coreActions.SET_VISIBLE_TOP_BANNER,
    payload: results,
  }),
};

export type CoreActions = ActionType<typeof coreActions>;

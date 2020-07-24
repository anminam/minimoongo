import { coreActions, CoreActions } from "./actions";

interface ICoreState {
  isVisibleTopBanner: boolean;
}
const initState: ICoreState = {
  isVisibleTopBanner: true,
};

export const coreReducer = (
  state: ICoreState = initState,
  action: CoreActions
) => {
  switch (action.type) {
    case coreActions.SET_VISIBLE_TOP_BANNER:
      return {
        ...state,
        isVisibleTopBanner: action.payload,
      };
    default:
      return state;
  }
};

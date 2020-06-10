export const browserActions = {
  MEDIA_QUERY_CHANGED: "MEDIA_QUERY_CHANGED",

  mediaQueryChanged: (results: any) => ({
    type: browserActions.MEDIA_QUERY_CHANGED,
    payload: {
      results,
    },
  }),
};

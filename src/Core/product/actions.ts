export const ProductActions = {
  ADD: "ADD",
  REMOVE: "REMOVE",

  add: () => ({
    type: ProductActions.ADD,
  }),

  remove: () => ({
    type: ProductActions.REMOVE,
  }),
};

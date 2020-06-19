export const ProductActions = {
  ADD: "product/ADD" as const,
  REMOVE: "product/REMOVE" as const,
  CHANGE_VALUE: "product/CHANGE_VALUE" as const,

  add: () => ({
    type: ProductActions.ADD,
  }),

  remove: () => ({
    type: ProductActions.REMOVE,
  }),

  changeValue: (value: number) => ({
    type: ProductActions.CHANGE_VALUE,
    payload: value,
  }),
};

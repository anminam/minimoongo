export const categoryActions = {
    category1: 'category1',

    categoryChanged: (results:any) => ({
        type: categoryActions.category1,
        payload: {
            results
        }
    }),
}
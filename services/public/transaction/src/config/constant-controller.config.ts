export const controllerConfig = {
  name: 'purchase-request',
  tag: 'before all aplis for using in aplication',
  modules: {
    purchaseRequest: {
      apis: {
        postCreate: {
          operation: {
            summary: 'Use api to generate purchase request',
          },
          name: '/v.1',
        },
      },
    },
  },
};

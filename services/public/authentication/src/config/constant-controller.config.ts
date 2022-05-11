export const controllerConfig = {
  name: 'authentication',
  tag: 'before all aplis for using in aplication',
  apis: {
    getHash: {
      operation: {
        summary: 'Use api to generate encryption hashes'
      },
      name: '/v.1/hash'
    },
    postLogin: {
      operation: {
        summary: 'Use api to logging of user in aplication',
      },
      name: '/v.1/login',
    },
    postLogout: {
      operation: {
        summary: 'Use api to loggout of user in aplication',
      },
      name: '/v.1/logout',
    },
    postRecoveryPassword: {
      operation: {
        summary: 'Use api to recovery password of user in aplication',
      },
      name: '/v.1/recovery-password',
    },
  },
};

export const controllerConfig = {
  name: 'authentications',
  tag: 'before all aplis for using in aplication',
  apis: {
    getHash: {
      operation: {
        summary: 'Use api to generate encryption hashes',
      },
      name: '/v1.0/hash',
    },
    postLogin: {
      operation: {
        summary: 'Use api to logging of user in aplication',
      },
      name: '/v1.0/login',
    },
    postLogout: {
      operation: {
        summary: 'Use api to loggout of user in aplication',
      },
      name: '/v1.0/logout',
    },
    postRecoveryPassword: {
      operation: {
        summary: 'Use api to recovery password of user in aplication',
      },
      name: '/v1.0/recovery-password',
    },
  },
}

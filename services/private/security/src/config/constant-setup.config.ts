export default () => ({
    tcp: {
      host: process.env.SETUP_TCP_HOST,
      port: process.env.SETUP_TCP_PORT,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expireIn: process.env.JWT_EXPIRESIN
    },
    database: {
      mongodb: {
        local: {
          uri: 'mongodb://172.17.0.2:27017/businessstock'
        },
        production: {
          uri: process.env.DATABASE_MONGO_HOSTNAME,
          user: process.env.DATABASE_MONGO_USER,
          pass: process.env.DATABASE_MONGO_PASSWORD,
          dbName: process.env.DATABASE_MONGO_NAME
        }
      },
    }
  });
  
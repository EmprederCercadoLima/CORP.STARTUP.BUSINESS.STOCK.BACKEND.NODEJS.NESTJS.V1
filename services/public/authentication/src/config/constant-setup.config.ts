export default () => ({
  http: {
    host: process.env.SETUP_HTTP_HOST,
    port: process.env.SETUP_HTTP_PORT,
  },
  client: {
    security: {
      host: process.env.CLIENT_SECURITY_HOST,
      port: process.env.CLIENT_SECURITY_PORT,
    },
  },
  database: {
    mongodb: {
      local: {
        uri: 'mongodb://172.17.0.2:27017/businessstock',
      },
      production: {
        uri: process.env.DATABASE_MONGO_HOSTNAME,
        user: process.env.DATABASE_MONGO_USER,
        pass: process.env.DATABASE_MONGO_PASSWORD,
        dbName: process.env.DATABASE_MONGO_NAME,
      },
    },
  },
})

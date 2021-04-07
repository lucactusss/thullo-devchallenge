export const configuration = {
  MONGODB: {
    MONGODB_URI: `mongodb://${process.env.MONGODB_USER || 'thullo'}:${
      process.env.MONGODB_PASSWORD || '*thullo'
    }@localhost:27017/${process.env.MONGODB_DB_NAME || 'thullo'}`,
    MONGODB_USER: process.env.MONGODB_USER || 'thullo',
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || '*thullo',
    MONGODB_DB_NAME: process.env.MONGODB_DB_NAME || 'thullo',
  },
  ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
};

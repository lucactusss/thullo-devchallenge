export const configuration = {
  MONGODB: {
    MONGODB_URI: `mongodb://${process.env.MONGODB_USER || 'thullo'}:${
      process.env.MONGODB_PASSWORD || '*thullo'
    }@${process.env.MONGODB_DB_URI || 'localhost'}:27017/${
      process.env.MONGODB_DB_NAME || 'thullo'
    }`,
    MONGODB_USER: process.env.MONGODB_USER || 'thullo',
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || '*thullo',
    MONGODB_DB_NAME: process.env.MONGODB_DB_NAME || 'thullo',
  },
  ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
  JWT_SECRET:
    process.env.JWT_SECRET ||
    'FDD957E21B1E402925DC671CFDC4F3A0C39E1ADE895932F08AADB5F458817011',
};

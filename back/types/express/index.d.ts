declare namespace Express {
  interface Request {
    context: import('../../src/infra/logging/Context').Context;
  }
}


import { Context } from '../../infra/logging/Context';

declare global {
  namespace Express {
    interface Request {
      context: Context;
    }
  }
}
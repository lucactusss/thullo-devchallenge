import { Context } from '../../infra/logging/Context';
import { User } from '../../models/database/User';

declare global {
  namespace Express {
    interface Request {
      context: Context;
      user: User;
    }
  }
}

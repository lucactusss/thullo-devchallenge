import { Request, Response, NextFunction } from 'express';
import HttpException from '../../infra/errors/HttpException';
import { validateLogin, validateCreateUser } from '../validators';

class UserController {
  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      if (!validateLogin(req.body)) {
        throw new HttpException(400, 'Something missing here!');
      }
      req.context.logger.info(`Login post ! ${JSON.stringify(req.body)}`);
    } catch (error) {
      next(error);
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      if (!validateCreateUser(req.body)) {
        throw new HttpException(400, 'Something missing here!');
      }
      req.context.logger.info(`Create user post ! ${JSON.stringify(req.body)}`);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();

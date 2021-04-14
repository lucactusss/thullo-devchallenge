import express, { Request, Response, NextFunction } from 'express';
import HttpException from '../../infra/errors/HttpException';
import { IController } from '../../models/api/IController';
import UserModel, { User } from '../../models/User';
import { validateLogin, validateCreateUser } from '../validators';

class UserController implements IController {
  public path = '/user';

  public router: express.Router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.post(this.path + '/login', this.loginUser);
    this.router.post(this.path + '/create', this.createUser);
  }

  loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      if (!validateLogin(req.body)) {
        throw new HttpException(400, 'Something missing here!');
      }
      req.context.logger.info(`Login post ! ${JSON.stringify(req.body)}`);
    } catch (error) {
      next(error);
    }
  };

  createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      if (!validateCreateUser(req.body)) {
        throw new HttpException(400, 'Something missing here!');
      }
      req.context.logger.info(`Create user post ! ${JSON.stringify(req.body)}`);
      await UserModel.create({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      });
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;

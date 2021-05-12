import express, { Request, Response, NextFunction } from 'express';
import { IController } from '../../models/api/IController';
import { StatusCodes } from 'http-status-codes';
import {
  CreateUserDTO,
  LoginUserDTO,
  UserResponse,
} from '../../business/user/user.models';
import UserService from '../../business/user/user.service';
import validationMiddleware from '../../infra/middlewares/validation.middleware';

class UserController implements IController {
  public path = '/users';

  public router: express.Router = express.Router();
  public userService = new UserService();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.post(
      this.path,
      validationMiddleware(CreateUserDTO),
      this.createUser
    );
    this.router.post(
      `${this.path}/login`,
      validationMiddleware(LoginUserDTO),
      this.loginUser
    );
  }

  /**
   * @apiVersion 0.0.1
   * @api {post} /users
   * @apiName CreateUser
   * @apiGroup User
   *
   * @apiDescription Endpoint for creating a new user
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   */
  createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const serviceResponse: UserResponse = await this.userService.createUser(
        req.context,
        new CreateUserDTO(
          req.body.username,
          req.body.email,
          req.body.password,
          req.body.firstName,
          req.body.lastName
        )
      );
      res.setHeader('Set-Cookie', [serviceResponse.cookie]);
      res.status(StatusCodes.OK).send(serviceResponse.user);
    } catch (error) {
      next(error);
    }
  };

  /**
   * @apiVersion 0.0.1
   * @api {post} /users/login
   * @apiName LoginUser
   * @apiGroup User
   *
   * @apiDescription Endpoint for login in a new user !
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   */
  loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const serviceResponse: UserResponse = await this.userService.loginUser(
        req.context,
        new LoginUserDTO(req.body.username, req.body.password)
      );
      res.setHeader('Set-Cookie', [serviceResponse.cookie]);
      res.status(StatusCodes.OK).send(serviceResponse.user);
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;

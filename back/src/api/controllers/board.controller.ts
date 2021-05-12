import express, { Request, Response, NextFunction } from 'express';
import { IController } from '../../models/api/IController';
import { StatusCodes } from 'http-status-codes';
import UserService from '../../business/user/user.service';
import authMiddleware from '../../infra/middlewares/auth.middleware';

class BoardController implements IController {
  public path = '/boards';

  public router: express.Router = express.Router();
  public userService = new UserService();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router
      .all(`${this.path}/*`, authMiddleware)
      .post(this.path, authMiddleware, this.createBoard);
  }

  /**
   * @apiVersion 0.0.1
   * @api {post} /board
   * @apiName CreateBoard
   * @apiGroup Board
   *
   * @apiDescription Endpoint for creating a new board
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   */
  createBoard = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      res.status(StatusCodes.OK).send();
    } catch (error) {
      next(error);
    }
  };
}

export default BoardController;

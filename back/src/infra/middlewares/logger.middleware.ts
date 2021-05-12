import { NextFunction, Request, Response } from 'express';
import { Context } from '../logging/Context';

export default (req: Request, resp: Response, next: NextFunction): void => {
  req.context = new Context();
  next();
};

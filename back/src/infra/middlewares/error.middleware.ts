import { NextFunction, Request, Response } from 'express';
import HttpException from '../errors/HttpException';

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  request.context.logger.warn(error.stack || '');
  response.status(status).send({
    status,
    message,
  });
}

export default errorMiddleware;

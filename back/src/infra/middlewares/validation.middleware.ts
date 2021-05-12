import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import * as express from 'express';
import HttpException from '../errors/HttpException';

function validationMiddleware<T>(type: unknown): express.RequestHandler {
  return (req, res, next) => {
    validate(plainToClass(type as any, req.body)).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors
            .map((error: ValidationError) =>
              Object.values((error as any).constraints)
            )
            .join(', ');
          next(new HttpException(400, message));
        } else {
          next();
        }
      }
    );
  };
}

export default validationMiddleware;

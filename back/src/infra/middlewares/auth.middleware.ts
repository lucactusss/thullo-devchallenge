import { NextFunction, Response, Request } from 'express';
import * as jwt from 'jsonwebtoken';
import UserModel from '../../models/database/User';
import {
  WrongAuthenticationTokenException,
  AuthenticationTokenMissingException,
} from '../../infra/errors/AuthException';
import { DataStoredInToken } from '../../infra/token/TokenData';
import { configuration } from '../../configuration';

async function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const cookies = request.cookies;
  if (cookies && cookies.Authorization) {
    try {
      const verificationResponse = jwt.verify(
        cookies.Authorization,
        configuration.JWT_SECRET
      ) as DataStoredInToken;
      const id = verificationResponse._id;
      const user = await UserModel.findById(id);
      if (user) {
        request.user = user;
        next();
      } else {
        next(
          new WrongAuthenticationTokenException(
            'Authentication token is expired'
          )
        );
      }
    } catch (error) {
      next(
        new WrongAuthenticationTokenException('Authentication token is expired')
      );
    }
  } else {
    next(new AuthenticationTokenMissingException('No token is present !'));
  }
}

export default authMiddleware;

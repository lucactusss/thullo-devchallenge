import HttpException from './HttpException';

export class AuthenticationTokenMissingException extends HttpException {
  constructor(message: string) {
    super(403, message);
  }
}

export class WrongAuthenticationTokenException extends HttpException {
  constructor(message: string) {
    super(403, message);
  }
}

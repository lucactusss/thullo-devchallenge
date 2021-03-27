import Pino, { Logger } from 'pino';

/**
 * This class will passed through controllers, services and repositories with logger and some user informations
 */
export class Context {
  private _logger: Logger;

  constructor() {
    this._logger = Pino({
      name: 'myShop',
      prettyPrint: {
        colorize: true,
        translateTime: true,
      },
    });
  }

  /**
   * Return Pino logger object
   */
  public get logger(): Logger {
    return this._logger;
  }
  public set logger(value: Logger) {
    this._logger = value;
  }
}

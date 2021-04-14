import cors from 'cors';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { IController } from '../models/api/IController';
import loggerMiddleware from '../infra/middlewares/loggerMiddleware';
import errorMiddleware from '../infra/middlewares/errorMiddleware';
import { Context } from '../infra/logging/Context';
import { configuration } from '../configuration';

/**
 * Base class for express application
 */
class HttpServer {
  public app: express.Application;
  public port: number;

  constructor(controllers: Array<IController>, port: number) {
    this.app = express();
    this.port = port;

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initHealthCheck();
    this.initializeControllers(controllers);
    this.initializeErrorMiddleware();
  }

  private initializeMiddlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(loggerMiddleware);
  }

  private initHealthCheck(): void {
    /**
     * @apiVersion 0.0.1
     * @api {get} /
     * @apiName Healthcheck
     * @apiGroup Healthcheck
     *
     * @apiDescription Basic endpoint
     *
     * @apiExample {curl} Example usage:
     *     curl -i http://localhost:8000/
     * @apiSampleRequest http://localhost:8000/
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *        "message": "Service is up & running"
     *     }
     */
    this.app.get('/', (req: Request, resp: Response) => {
      req.context.logger.info('The logger works in healthcheck just fine!');
      resp.json({
        message: 'Service is up & running',
      });
    });
  }

  private initializeControllers(controllers: Array<IController>): void {
    controllers.forEach((controller: IController) => {
      this.app.use('/', controller.router);
    });
  }

  private initializeErrorMiddleware(): void {
    this.app.use(errorMiddleware);
  }

  private connectToDatabase(): void {
    //Configure Mongoose
    mongoose.connect(configuration.MONGODB.MONGODB_URI, {
      useNewUrlParser: true,
    });
    mongoose.set('debug', true);
  }

  public listen(rootContext: Context, emojiToShow: string): void {
    this.app.listen(this.port, () => {
      rootContext.logger.info(
        `${emojiToShow}  Thullo backend is running at port ${this.port}`
      );
    });
  }
}

export default HttpServer;

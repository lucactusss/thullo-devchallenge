import cors from 'cors';
import express, { Request, Response } from 'express';
import loggerMiddleware from '../infra/middlewares/loggerMiddleware';
import authMiddleware from '../infra/middlewares/authMiddleware';
import errorMiddleware from '../infra/middlewares/errorMiddleware';
import userController from './controllers/userController';

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(loggerMiddleware);

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
 *        "text": "Express + TypeScript Server"
 *     }
 */
server.get('/', (req: Request, resp: Response) => {
  req.context.logger.info('The logger works in healthcheck just fine!');
  resp.json({
    text: 'Express + TypeScript Server',
  });
});

server.post('/user/create', authMiddleware.optional, userController.createUser);
server.post('/user/login', authMiddleware.optional, userController.loginUser);

server.use(errorMiddleware);

export default server;

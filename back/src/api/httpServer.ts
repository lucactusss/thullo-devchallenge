import cors from 'cors';
import express, { Request, Response } from 'express';
import loggerMiddleware from '../infra/middlewares/loggerMiddleware';

const server = express();

server.use(cors());
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

export default server;

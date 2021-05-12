import express from 'express';

/**
 * Basic interface for defining a controller.
 * A controller is basically a group of routes, grouped under the same endpoint.
 * It defines a bounded context to isolate concepts
 */
export interface IController {
  /**
   * Path of express routes (e.g. /user)
   */
  path: string;

  /**:
   * Technical express instance, required for each controller !
   */
  router: express.Router;
}

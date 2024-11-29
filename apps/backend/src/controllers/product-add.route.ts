import { Router, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';

class ProductPostController implements Controller {
  async run(req: Request, res: Response) {
    // userIsLoggedIn();
    // userIsAuthorizated();
    // validateInputData();
    // GetProductsList().run();
    res.status(httpStatus.OK).send();
  }
}

export const register = (router: Router) => {
  const controller = new ProductPostController();
  router.get('/v1/products/add', (req: Request, res: Response) => controller.run(req, res));
};

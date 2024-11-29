import { Router, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';

class UserLogout implements Controller {
  async run(req: Request, res: Response) {
    res.status(httpStatus.OK).send();
  }
}

export const register = (router: Router) => {
  const controller = new UserLogout();
  router.post('/logout', (req: Request, res: Response) => controller.run(req, res));
};

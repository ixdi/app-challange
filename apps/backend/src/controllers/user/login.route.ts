import { Router, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';

class UserLogin implements Controller {
  async run(req: Request, res: Response) {
    res.json({ user }).status(httpStatus.OK).send();
  }
}

export const register = (router: Router) => {
  const controller = new UserLogin();
  router.post('/login', (req: Request, res: Response) => controller.run(req, res));
};

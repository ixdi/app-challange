import { Router, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import { z } from 'zod';

// Define validation schemas
const userSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string(),
});

class UserRegister implements Controller {
  async run(req: Request, res: Response) {
    // 1. Validate data
    // 2. Check user don't exists
    // 3. Create user
    const { username, password, email } = req.body;
    userSchema.parse({ username, password, email });
    res.status(httpStatus.OK).send();
  }
}

export const register = (router: Router) => {
  const controller = new UserRegister();
  router.post('/register', (req: Request, res: Response) => controller.run(req, res));
};

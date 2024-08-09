import { Request, Response } from 'express';
import CatchAsync from '@utils/CatchAsync';
import UserService from '@services/UserService';

class AuthController {
  private userService: UserService;

  public Register = CatchAsync(async (req: Request, res: Response) => {
    const { email } = req.body;
    const userExist = await this.userService.getUserByEmail(email);
    if (userExist)
      return res.status(400).json({ message: 'This email is already taken.' });

    const newUser = await this.userService.createUser(req.body);
    delete newUser.password;

    return res.status(201).json({ data: newUser });
  });
}

export default AuthController;

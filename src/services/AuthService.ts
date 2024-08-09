import User from '@models/User';
import AppDataSource from 'data-source';
import { Repository } from 'typeorm';

class AuthService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }
}

export default AuthService;

import { Repository } from 'typeorm';
import AppDataSource from 'data-source';
import User from '@models/User';
import { CreateUser } from '@types';

class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async createUser(data: CreateUser) {
    const user = await this.userRepository.create(data);
    return user;
  }
}

export default UserService;

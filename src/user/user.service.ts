import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repositories/user.repository';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserDto);
  }

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.findAllUsers();
  }

  async findOneOrFail(email: string): Promise<User> {
    return this.userRepository.findOneOrFail(email);
  }

  async findUserById(id: string): Promise<User> {
    return this.userRepository.findUserById(id);
  }

  async findUserName(name: string): Promise<User> {
    return this.userRepository.findUserByName(name);
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepository.updateUser(id, updateUserDto);
  }

  async deleteUser(id: string): Promise<User> {
    return this.userRepository.deleteUser(id);
  }
}

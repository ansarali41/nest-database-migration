import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { TestUser } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(TestUser)
    private readonly userRepository: Repository<TestUser>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const user = await this.userRepository.save(createUserDto);
      if (!user) {
        throw new InternalServerErrorException('error ...');
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
  async getUser() {
    return await this.userRepository.find({});
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/user.dto';

@ApiTags('user')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.appService.createUser(createUserDto);
  }

  @Get()
  async getUser() {
    return await this.appService.getUser();
  }
}

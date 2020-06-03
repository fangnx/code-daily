import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<Array<User>> {
    return this.usersService.findAllUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): void {
    this.usersService.createUser(createUserDto);
  }
}

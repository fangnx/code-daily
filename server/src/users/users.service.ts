import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly UserModel) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.UserModel(createUserDto);
    return await newUser.save();
  }

  async findAllUsers(): Promise<Array<User>> {
    return await this.UserModel.find().exec();
  }
}

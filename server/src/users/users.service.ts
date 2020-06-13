import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Payload } from 'src/auth/auth.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  public async createUser(createUserDto: CreateUserDto): Promise<any> {
    const newUser = new this.userModel(createUserDto);
    return await newUser.save();
  }

  public async findAllUsers(): Promise<Array<User>> {
    return await this.userModel.find().exec();
  }

  public async findUserByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).exec();
  }

  public async findUserByLogin(loginUserDto: LoginUserDto) {
    const user = await this.userModel.findOne({ email: loginUserDto.email });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    const isPasswordCorrect: boolean = await bcrypt.compare(
      user.password,
      loginUserDto.password,
    );
    if (!isPasswordCorrect) {
      throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
    }

    return;
  }

  public async findUserByPayload(payload: Payload): Promise<User> {
    return await this.userModel.findOne({ email: payload.email }).exec();
  }
}

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Payload } from 'src/auth/auth.interface';
import * as bcrypt from 'bcrypt';
import { DtoHelper } from 'src/shared/dtoHelper';
import { UserDto } from './dto/user.dto';
import { AddFavoriteTagDto } from './dto/add-favorite-tag.dto';

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

  public async findUserByEmail(email: string): Promise<UserDto> {
    const user: User = await this.userModel.findOne({ email }).exec();
    return DtoHelper.toUserDto(user);
  }

  public async findUserByLogin(loginUserDto: LoginUserDto): Promise<UserDto> {
    const user = await this.userModel.findOne({ email: loginUserDto.email });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // TODO: use hashing
    // const isPasswordCorrect: boolean = await bcrypt.compare(
    //   user.password,
    //   loginUserDto.passwo
    // );

    const isPasswordCorrect: boolean = user.password === loginUserDto.password;

    if (!isPasswordCorrect) {
      throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
    }

    return DtoHelper.toUserDto(user);
  }

  public async findUserByPayload(payload: Payload): Promise<UserDto> {
    const user: User = await this.userModel
      .findOne({ email: payload.email })
      .exec();
    return DtoHelper.toUserDto(user);
  }

  public async addFavoriteTagToUser(
    addFavoriteTagDto: AddFavoriteTagDto,
  ): Promise<void> {
    if (!addFavoriteTagDto.tag) {
      throw new HttpException(
        'Parameter `Tag` is null or empty',
        HttpStatus.BAD_REQUEST,
      );
    }
    const user: User = await this.userModel
      .findOne({ email: addFavoriteTagDto.email })
      .exec();
    if (!user) {
      throw new HttpException(
        'Invalid token: user does not exist',
        HttpStatus.UNAUTHORIZED,
      );
    }

    let favoriteTags: Array<string> = user.favoriteTags;
    if (user.favoriteTags.indexOf(addFavoriteTagDto.tag) >= 0) {
      return;
    }
    favoriteTags = [...favoriteTags, addFavoriteTagDto.tag];
    await this.userModel.updateOne(
      { email: addFavoriteTagDto.email },
      { favoriteTags },
    );
  }

  public async removeFavoriteTagFromUser(
    removeFavoriteTagDto: AddFavoriteTagDto,
  ): Promise<void> {
    if (!removeFavoriteTagDto.tag) {
      throw new HttpException(
        'Parameter `Tag` is null or empty',
        HttpStatus.BAD_REQUEST,
      );
    }
    const user: User = await this.userModel
      .findOne({ email: removeFavoriteTagDto.email })
      .exec();

    if (!user) {
      throw new HttpException(
        'Invalid token: user does not exist',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const favoriteTags: Array<string> = user.favoriteTags.filter(
      tag => tag !== removeFavoriteTagDto.tag,
    );
    await this.userModel.updateOne(
      { email: removeFavoriteTagDto.email },
      { favoriteTags },
    );
  }
}

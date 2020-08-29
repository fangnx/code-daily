import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { DtoHelper } from './dto/dto.helper';
import { UserDto } from './dto/user.dto';
import { AddFavoriteTagDto } from './dto/add-favorite-tag.dto';
import { SubscribeToTagDto } from './dto/subscribe-to-tag.dto';
import { Payload } from '../auth/auth.interface';

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

  public async subscribeToTagForUser(
    subscribeToTagDto: SubscribeToTagDto,
  ): Promise<void> {
    if (!subscribeToTagDto.tag) {
      throw new HttpException(
        'Parameter `Tag` is null or empty',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user: User = await this.userModel
      .findOne({ email: subscribeToTagDto.email })
      .exec();

    if (!user) {
      throw new HttpException(
        'Invalid token: user does not exist',
        HttpStatus.UNAUTHORIZED,
      );
    }

    let subscribedTags: Array<string> = user.subscribedTags;
    if (user.favoriteTags.indexOf(subscribeToTagDto.tag) >= 0) {
      return;
    }
    subscribedTags = [...subscribedTags, subscribeToTagDto.tag];
    await this.userModel.updateOne(
      { email: subscribeToTagDto.email },
      { subscribedTags },
    );
  }

  public async unsubscribeToTagForUser(unsubscribeToTagDto: SubscribeToTagDto) {
    if (!unsubscribeToTagDto.tag) {
      throw new HttpException(
        'Parameter `Tag` is null or empty',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user: User = await this.userModel
      .findOne({ email: unsubscribeToTagDto.email })
      .exec();

    if (!user) {
      throw new HttpException(
        'Invalid token: user does not exist',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const subscribedTags: Array<string> = user.subscribedTags.filter(
      tag => tag !== unsubscribeToTagDto.tag,
    );
    await this.userModel.updateOne(
      { email: unsubscribeToTagDto.email },
      { subscribedTags },
    );
  }

  public async addPocketTokenToUser(
    email: string,
    accessToken: string,
    pocketUserName: string,
  ) {
    const user: User = await this.userModel.findOne({ email }).exec();

    if (!user) {
      throw new HttpException(
        'Invalid token: user does not exist',
        HttpStatus.UNAUTHORIZED,
      );
    }

    await this.userModel.updateOne(
      { email },
      { pocketAccessToken: accessToken, pocketUserName: pocketUserName },
    );
  }
}

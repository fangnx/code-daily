import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';
import { AddFavoriteTagDto } from './dto/add-favorite-tag.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UserDto } from './dto/user.dto';
import { SubscribeToTagDto } from './dto/subscribe-to-tag.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getAllUsers(): Promise<Array<User>> {
    // TODO: should this return User or UserDto?
    return this.usersService.findAllUsers();
  }

  @Post('/user')
  public getUser(@Body() getUserDto: GetUserDto): Promise<UserDto> {
    return this.usersService.findUserByEmail(getUserDto.email);
  }

  @Post('/tags/add')
  public addFavoriteTag(
    @Body() addFavoriteTagDto: AddFavoriteTagDto,
  ): Promise<void> {
    return this.usersService.addFavoriteTagToUser(addFavoriteTagDto);
  }

  @Post('/tags/remove')
  public removeFavoriteTag(
    @Body() removeFavoriteTagDto: AddFavoriteTagDto,
  ): Promise<void> {
    return this.usersService.removeFavoriteTagFromUser(removeFavoriteTagDto);
  }

  @Post('/tags/subscribe')
  public subscribeToTag(
    @Body() subscribeToTagDto: SubscribeToTagDto,
  ): Promise<void> {
    return this.usersService.subscribeToTagForUser(subscribeToTagDto);
  }

  @Post('/tags/unsubscribe')
  public unsubscribeToTag(
    @Body() unsubscribeToTagDto: SubscribeToTagDto,
  ): Promise<void> {
    return this.usersService.unsubscribeToTagForUser(unsubscribeToTagDto);
  }
}

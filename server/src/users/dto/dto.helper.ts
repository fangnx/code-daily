import { User } from '../user.interface';
import { UserAuthDto } from './user-auth.dto';
import { UserDto } from './user.dto';

export class DtoHelper {
  public static toUserDto(userData: User): UserDto {
    const {
      email,
      favoriteTags,
      subscribedTags,
      isSubscribed,
      pocketAccessToken,
      pocketUserName,
    } = userData;
    const userDto: UserDto = {
      email,
      favoriteTags,
      subscribedTags,
      isSubscribed,
      pocketAccessToken,
      pocketUserName,
    };
    return userDto;
  }

  public static toUserAuthDto(userData: User): UserAuthDto {
    const { email, pocketAccessToken, pocketUserName } = userData;
    const userAuthDto: UserAuthDto = {
      email,
      pocketAccessToken,
      pocketUserName,
    };
    return userAuthDto;
  }
}

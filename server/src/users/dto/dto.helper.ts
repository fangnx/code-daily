import { User } from '../user.interface';
import { UserDto } from './user.dto';

export class DtoHelper {
  public static toUserDto(userData: User) {
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
}

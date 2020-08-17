import { User } from '../users/user.schema';
import { UserDto } from 'src/users/dto/user.dto';

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

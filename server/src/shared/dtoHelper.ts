import { User } from '../users/user.schema';
import { UserDto } from 'src/users/dto/user.dto';

export class DtoHelper {
  public static toUserDto(userData: User) {
    const { email, isEmailVerified, favoriteTags, isSubscribed } = userData;
    const userDto: UserDto = {
      email,
      isEmailVerified,
      favoriteTags,
      isSubscribed,
    };
    return userDto;
  }
}

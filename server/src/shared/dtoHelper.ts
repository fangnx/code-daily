import * as moment from 'moment';
import { User } from '../users/user.schema';
import { UserDto } from 'src/users/dto/user.dto';

export class TimeRangeHelper {
  public static toUserDto(userData: User) {
    const { email, isEmailVerified } = userData;
    const userDto: UserDto = { email, isEmailVerified };
  }
}

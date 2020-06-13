import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserDto } from '../users/dto/user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UsersService } from '../users/users.service';
import { RegistrationStatus, Payload } from './auth.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      isSuccessful: true,
      message: 'User registered',
    };

    try {
      await this.usersService.createUser(userDto);
    } catch (err) {
      status = {
        isSuccessful: false,
        message: err,
      };
    }

    return status;
  }

  public async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    // find user in db
    const user = await this.usersService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this.createToken(user);

    return {
      username: user.username,
      ...token,
    };
  }

  public async validateUser(payload: Payload): Promise<UserDto> {
    const user = await this.usersService.findUserByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private createToken({ email }: UserDto): any {
    const expiresIn = process.env.EXPIRESIN;
    const user: Payload = { email };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn,
      accessToken,
    };
  }
}

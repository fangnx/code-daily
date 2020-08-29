import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserDto } from '../users/dto/user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UsersService } from '../users/users.service';
import { RegistrationStatus, Payload, LoginStatus } from './auth.interface';

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
    const user = await this.usersService.findUserByLogin(loginUserDto);
    const token = this.createToken(user);

    return {
      email: user.email,
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

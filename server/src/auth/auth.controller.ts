import {
  Controller,
  Body,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { RegistrationStatus } from './auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<RegistrationStatus> {
    const res: RegistrationStatus = await this.authService.register(
      createUserDto,
    );
    if (!res.isSuccessful) {
      throw new HttpException(res.message, HttpStatus.BAD_REQUEST);
    }
    return res;
  }
}

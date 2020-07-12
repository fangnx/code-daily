import { Controller, Post, Body } from '@nestjs/common';
import { SesService } from './ses.service';
import { SendEmailDto } from './dto/send-email-dto';

@Controller('ses')
export class SesController {
  constructor(private readonly sesService: SesService) {}

  @Post('send')
  public async sendEmailToUser(
    @Body() sendEmailDto: SendEmailDto;
  ) {
    return;
  }
}

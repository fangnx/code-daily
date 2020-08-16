import { PocketService } from './pocket.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('pocket')
export class PocketController {
  constructor(private readonly pocketService: PocketService) {}

  @Get('request_token')
  public obtainRequestToken() {
    return this.pocketService.obtainRequestToken();
  }

  @Get('authorize')
  public authorize(@Query('request_token') requestToken: string) {
    return this.pocketService.obtainAccessToken(requestToken);
  }
}

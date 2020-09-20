import { Controller, Get, Query, Body, Post } from '@nestjs/common';
import { PocketService } from './pocket.service';
import { PocketRequestToken } from './pocket.interface';
import { AddPocketItemDto } from './dto/add-pocket-item.dto';

@Controller('pocket')
export class PocketController {
  constructor(private readonly pocketService: PocketService) {}

  @Get('request_token')
  public obtainRequestToken(): Promise<PocketRequestToken> {
    return this.pocketService.obtainRequestToken();
  }

  @Get('authorize')
  public authorize(
    @Query('email') email: string,
    @Query('request_token') requestToken: string,
  ): Promise<void> {
    return this.pocketService.connectUserWithPocket(email, requestToken);
  }

  @Post('add')
  public addItem(@Body() addPocketItemDto: AddPocketItemDto): Promise<boolean> {
    return this.pocketService.addItemToPocket(addPocketItemDto);
  }
}

import { Module } from '@nestjs/common';
import { SesService } from './ses.service';

@Module({
  imports: [],
  controllers: [],
  providers: [SesService],
})
export class SesModule {}

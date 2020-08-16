import { Module, HttpModule } from '@nestjs/common';
import { PocketController } from './pocket.controller';
import { PocketService } from './pocket.service';

@Module({
  imports: [HttpModule],
  controllers: [PocketController],
  providers: [PocketService],
  exports: [PocketModule],
})
export class PocketModule {}

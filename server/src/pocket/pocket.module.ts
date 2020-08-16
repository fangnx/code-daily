import { Module, HttpModule } from '@nestjs/common';
import { PocketController } from './pocket.controller';
import { PocketService } from './pocket.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [HttpModule, UsersModule],
  controllers: [PocketController],
  providers: [PocketService],
  exports: [PocketModule],
})
export class PocketModule {}

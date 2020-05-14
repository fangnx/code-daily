import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [HttpModule, QuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

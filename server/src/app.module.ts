import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [HttpModule, QuestionsModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

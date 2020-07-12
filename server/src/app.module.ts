import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.module';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SesModule } from './ses/ses.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/soserver'),
    HttpModule,
    QuestionsModule,
    TagsModule,
    UsersModule,
    AuthModule,
    SesModule,
  ],
})
export class AppModule {}

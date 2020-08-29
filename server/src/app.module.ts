import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.module';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SesModule } from './ses/ses.module';
import { PocketModule } from './pocket/pocket.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI),
    HttpModule,
    QuestionsModule,
    TagsModule,
    UsersModule,
    AuthModule,
    SesModule,
    PocketModule,
  ],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpModule } from '@nestjs/common';
import * as request from 'supertest';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from '../src/questions/questions.module';
import { TagsModule } from '../src/tags/tags.module';
import { UsersModule } from '../src/users/users.module';
import { AuthModule } from '../src/auth/auth.module';
import { SesModule } from '../src/ses/ses.module';
import { PocketModule } from '../src/pocket/pocket.module';
import { AppController } from '../src/app.controller';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost/soserver'),
        HttpModule,
        QuestionsModule,
        TagsModule,
        UsersModule,
        AuthModule,
        SesModule,
        PocketModule,
      ],
      controllers: [AppController],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should base endpoint return a message', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200);
  });
});

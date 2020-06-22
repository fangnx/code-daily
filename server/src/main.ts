import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO: remove this.
  console.log(process.env);
  await app.listen(process.env.PORT);
}
bootstrap();

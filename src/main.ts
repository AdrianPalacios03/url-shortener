import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {
    origin: 'https://nice-link.netlify.app',
    methods: 'GET,PUT,POST,DELETE',
  }
);
  await app.listen(3000);
}
bootstrap();

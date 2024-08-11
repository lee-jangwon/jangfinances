import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Jang Finances")
    .setDescription("윤호님이 시켜서 영광스럽게 만드는 API")
    .setVersion("1.0")
    .addTag("api")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  )
  await app.listen(3000);
}
bootstrap();

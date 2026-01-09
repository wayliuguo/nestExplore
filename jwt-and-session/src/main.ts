import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'secret_str_123456', // 密钥
      resave: false, // 不重新保存会话
      saveUninitialized: false, // 不保存未初始化的会话
    }),
  );

  await app.listen(3000);
}
bootstrap();

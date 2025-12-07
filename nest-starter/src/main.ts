import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SimpleLoggerMiddleware } from './common/middleware/logger/simple-logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // 启用 DTO 验证
  
  // 全局应用类中间件（有依赖注入的情况）
  const loggerMiddleware = app.get(LoggerMiddleware);
  app.use(loggerMiddleware.use.bind(loggerMiddleware));
  
  // 全局应用函数中间件（可选，根据需要保留或移除）
  // app.use(SimpleLoggerMiddleware);
  
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SimpleLoggerMiddleware } from './common/middleware/logger/simple-logger.middleware';
import { TestGuard } from './common/guard/test-guard.guard';
import { TestInterceptor } from './common/interceptor/test.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 启用 DTO 验证
  app.useGlobalPipes(new ValidationPipe()); // 管道：全局级别

  // 全局应用类中间件（有依赖注入的情况）
  const loggerMiddleware = app.get(LoggerMiddleware);
  // app.use(loggerMiddleware.use.bind(loggerMiddleware));
  app.use((req, res, next) => loggerMiddleware.use(req, res, next));

  // 全局应用函数中间件（可选，根据需要保留或移除）
  // app.use(SimpleLoggerMiddleware);

  // 全局应用守卫
  app.useGlobalGuards(new TestGuard());

  // 全局应用拦截器
  app.useGlobalInterceptors(new TestInterceptor());

  await app.listen(3000);
}
bootstrap();

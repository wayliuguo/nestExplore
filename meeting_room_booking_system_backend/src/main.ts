import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FormatResponseInterceptor } from './format-response.interceptor';
import { InvokeRecordInterceptor } from './invoke-record.interceptor';
import { CustomExceptionFilter } from './custom-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 请求参数校验
  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalInterceptors(new FormatResponseInterceptor());
  app.useGlobalInterceptors(new InvokeRecordInterceptor());
  app.useGlobalFilters(new CustomExceptionFilter());

  app.enableCors();

  // 获取配置服务
  const configService = app.get(ConfigService);
  // 监听指定端口
  await app.listen(configService.get('nest_server_port'));
}
bootstrap();

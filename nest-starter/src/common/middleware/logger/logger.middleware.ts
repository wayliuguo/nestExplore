import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from 'src/config/config.service';

// 类中间件需用 @Injectable() 标记，实现 NestMiddleware 接口
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  @Inject(ConfigService)
  private readonly configService: ConfigService;

  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `[${new Date().toISOString()}] ${this.configService.getDatabaseType()} ${req.method} ${req.originalUrl}`,
    );
    next(); // 调用下一个中间件/路由处理器（必须执行，否则请求会挂起）
  }
}

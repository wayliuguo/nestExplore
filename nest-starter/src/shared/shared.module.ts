import { Module, Global } from '@nestjs/common';
import { LoggerService } from './logger.service'; // 通用日志服务

@Global() // 标记为全局模块
@Module({
  providers: [LoggerService], // 注册提供器
  exports: [LoggerService], // 导出提供器（全局可用）
})
export class SharedModule {}

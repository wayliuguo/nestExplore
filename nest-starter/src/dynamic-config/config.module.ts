import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { DynamicConfigService } from './config.service';

@Module({
  imports: [
    // 加载 .env 文件，全局可用
    NestConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [DynamicConfigService],
  exports: [DynamicConfigService], // 导出供其他模块使用
})
export class DynamicConfigModule {}

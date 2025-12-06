import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import {
  DynamicDatabaseConfig,
  DbType,
} from 'src/dynamic-database/interfaces/db-config.interface';

@Injectable()
export class DynamicConfigService {
  constructor(private nestConfigService: NestConfigService) {}

  // 获取数据库配置
  getDatabaseConfig(): DynamicDatabaseConfig {
    return {
      type: this.nestConfigService.get<DbType>('DB_TYPE', 'mysql'), // 默认 mysql
      host: this.nestConfigService.get<string>('DB_HOST', 'localhost'),
      port: this.nestConfigService.get<number>('DB_PORT', 3306), // 默认 mysql 端口
      username: this.nestConfigService.get<string>('DB_USERNAME', 'root'),
      password: this.nestConfigService.get<string>('DB_PASSWORD', '123456'),
      database: this.nestConfigService.get<string>('DB_NAME', 'nest_db'),
      synchronize: this.nestConfigService.get<boolean>('DB_SYNCHRONIZE', true), // 开发环境默认同步
    };
  }
}

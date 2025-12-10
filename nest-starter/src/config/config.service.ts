import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

// 加载 .env 文件中的环境变量
dotenv.config();

@Injectable()
export class ConfigService {
  // 获取数据库类型
  getDatabaseType(): 'mysql' | 'postgres' {
    const type = process.env.DB_TYPE;
    return type === 'mysql' || type === 'postgres' ? type : 'mysql'; // 默认使用 mysql
  }

  // 获取数据库主机
  getDatabaseHost(): string {
    return process.env.DB_HOST || 'localhost';
  }

  // 获取数据库端口
  getDatabasePort(): number {
    return parseInt(process.env.DB_PORT, 10) || 3306; // MySQL 默认端口
  }

  // 获取数据库用户名
  getDatabaseUsername(): string {
    return process.env.DB_USERNAME || 'root';
  }

  // 获取数据库密码
  getDatabasePassword(): string {
    return process.env.DB_PASSWORD || 'password';
  }

  // 获取数据库名称
  getDatabaseName(): string {
    return process.env.DB_NAME || 'test_db';
  }

  getJwtSecret(): string {
    return process.env.JWT_SECRET || 'my_dev_secret_key_123456';
  }

  getJwtExpiresIn(): string {
    return process.env.JWT_EXPIRES_IN || '1h';
  }
}

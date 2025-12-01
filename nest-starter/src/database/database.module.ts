// src/database/database.module.ts
import { Module, Provider } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { DatabaseService } from './database.interface';
import { MySQLService } from './mysql.service';
import { PostgreSQLService } from './postgres.service';

// 定义一个令牌（Token），用于标识我们的数据库服务
export const DATABASE_SERVICE_TOKEN = 'DATABASE_SERVICE';

// 工厂提供器
const databaseProvider: Provider = {
  provide: DATABASE_SERVICE_TOKEN, // 使用令牌作为提供器的标识
  useFactory: async (
    configService: ConfigService,
  ): Promise<DatabaseService> => {
    // 1. 从配置服务中获取数据库类型和连接信息
    const dbType = configService.getDatabaseType();
    const host = configService.getDatabaseHost();
    const port = configService.getDatabasePort();
    const username = configService.getDatabaseUsername();
    const password = configService.getDatabasePassword();
    const database = configService.getDatabaseName();

    // 2. 根据数据库类型，动态创建并返回相应的数据库服务实例
    let dbService: DatabaseService;

    switch (dbType) {
      case 'postgres':
        dbService = new PostgreSQLService(
          host,
          port,
          username,
          password,
          database,
        );
        break;
      case 'mysql':
      default:
        dbService = new MySQLService(host, port, username, password, database);
        break;
    }

    // 3. (可选) 工厂函数可以执行异步操作，比如提前建立数据库连接
    await dbService.connect();

    // 4. 返回创建好的实例
    return dbService;
  },
  // 声明工厂函数的依赖项，Nest 会自动注入
  inject: [ConfigService],
};

@Module({
  // 注册工厂提供器和其他所需的提供器
  providers: [
    databaseProvider,
    ConfigService, // ConfigService 本身也是一个提供器
    // MySQLService 和 PostgreSQLService 不需要在这里列出，因为它们是在工厂内部手动实例化的
  ],
  // 导出令牌，以便其他模块可以注入这个动态创建的数据库服务
  exports: [DATABASE_SERVICE_TOKEN],
})
export class DatabaseModule {}

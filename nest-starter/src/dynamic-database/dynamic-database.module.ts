import {
  Module,
  DynamicModule,
  Provider,
  OnModuleDestroy,
  Scope,
} from '@nestjs/common';
import { DynamicDatabaseConfig } from './interfaces/db-config.interface';
import { DynamicDatabaseConnection } from './interfaces/db-connection.interface';
import { DATABASE_CONFIG, DATABASE_CONNECTION } from './constants';
import { MySQLConnection } from './connections/mysql.connection';
import { PostgreSQLConnection } from './connections/postgres.connection';
import { DynamicDatabaseService } from './dynamic-database.service';

// 定义特性模块配置接口
export interface FeatureConfig {
  tableName?: string;
  prefix?: string;
}

@Module({})
export class DynamicDatabaseModule implements OnModuleDestroy {
  // 存储连接实例，用于模块销毁时断开连接
  private static connection: DynamicDatabaseConnection;
  // 存储特性配置
  private static featureConfigs = new Map<string, FeatureConfig>();

  // 动态模块核心方法：接收配置，返回动态模块
  static forRoot(config: DynamicDatabaseConfig): DynamicModule {
    // 1. 注册数据库配置提供器
    const configProvider: Provider = {
      provide: DATABASE_CONFIG,
      useValue: config,
    };

    // 2. 动态创建数据库连接提供器（核心逻辑）
    const connectionProvider: Provider = {
      provide: DATABASE_CONNECTION,
      useFactory: async (
        dbConfig: DynamicDatabaseConfig,
      ): Promise<DynamicDatabaseConnection> => {
        let connection: DynamicDatabaseConnection;

        // 根据数据库类型创建对应连接实例
        switch (dbConfig.type) {
          case 'postgres':
            connection = new PostgreSQLConnection(dbConfig);
            break;
          case 'mysql':
          default:
            connection = new MySQLConnection(dbConfig);
            break;
        }

        // 初始化连接（异步操作）
        await connection.connect();
        DynamicDatabaseModule.connection = connection; // 保存连接实例
        return connection;
      },
      inject: [DATABASE_CONFIG], // 注入配置
    };

    // 3. 返回动态模块配置
    return {
      module: DynamicDatabaseModule,
      global: true, // 全局模块：所有模块无需重复导入，直接注入
      providers: [configProvider, connectionProvider, DynamicDatabaseService],
      exports: [DATABASE_CONNECTION, DynamicDatabaseService], // 导出供其他模块使用
    };
  }

  // forFeature方法：用于特性模块配置
  static forFeature(
    moduleName: string,
    config: FeatureConfig = {},
  ): DynamicModule {
    // 存储特性模块配置
    DynamicDatabaseModule.featureConfigs.set(moduleName, config);

    // 创建特性模块配置提供器
    const featureConfigProvider: Provider = {
      provide: `${moduleName.toUpperCase()}_DB_CONFIG`,
      useValue: config,
      scope: Scope.REQUEST,
    };

    // 创建特定模块的数据库服务提供器
    const moduleDatabaseServiceProvider: Provider = {
      provide: `${moduleName}DatabaseService`,
      useFactory: (connection: DynamicDatabaseConnection) => {
        const featureConfig =
          DynamicDatabaseModule.featureConfigs.get(moduleName) || {};
        // 这里可以根据特性配置自定义服务实例
        // 简单起见，我们仍然使用基础的DynamicDatabaseService
        return new DynamicDatabaseService(connection);
      },
      inject: [DATABASE_CONNECTION],
      scope: Scope.REQUEST,
    };

    return {
      module: DynamicDatabaseModule,
      providers: [featureConfigProvider, moduleDatabaseServiceProvider],
      exports: [featureConfigProvider, moduleDatabaseServiceProvider],
    };
  }

  // 获取特性模块配置的静态方法
  static getFeatureConfig(moduleName: string): FeatureConfig {
    return this.featureConfigs.get(moduleName) || {};
  }

  // 模块销毁时断开数据库连接（Nest 生命周期钩子）
  async onModuleDestroy() {
    if (DynamicDatabaseModule.connection) {
      await DynamicDatabaseModule.connection.disconnect();
    }
  }
}

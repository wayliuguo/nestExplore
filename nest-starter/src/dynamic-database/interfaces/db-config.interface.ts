export type DbType = 'mysql' | 'postgres';

export interface DynamicDatabaseConfig {
  type: DbType;  // 数据库类型（mysql/postgres）
  host: string; // 主机
  port: number;  // 端口
  username: string;  // 用户名
  password: string; // 密码
  database: string; // 数据库名称
  synchronize?: boolean; // 是否自动同步表结构（开发环境用）
}

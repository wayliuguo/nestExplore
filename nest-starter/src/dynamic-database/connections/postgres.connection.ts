// src/database/connections/postgres.connection.ts
import { Injectable } from '@nestjs/common';
import { DynamicDatabaseConnection } from '../interfaces/db-connection.interface';
import { DynamicDatabaseConfig } from '../interfaces/db-config.interface';

@Injectable()
export class PostgreSQLConnection implements DynamicDatabaseConnection {
  private isConnected = false;
  private config: DynamicDatabaseConfig;

  constructor(config: DynamicDatabaseConfig) {
    this.config = config;
  }

  // 连接数据库（模拟）
  async connect(): Promise<void> {
    // 模拟数据库连接
    console.log(
      `[PostgreSQL] 模拟连接到 ${this.config.host}:${this.config.port}/${this.config.database} 作为 ${this.config.username}...`,
    );
    // 不再使用真实的PostgreSQL客户端连接
    this.isConnected = true;
    console.log('[PostgreSQL] 模拟连接成功。');

    // 模拟同步表结构
    if (this.config.synchronize) {
      console.log('[PostgreSQL] 模拟表结构同步完成（cats 表）');
    }
  }

  // 执行查询（SELECT）
  async query(sql: string, params?: any[]): Promise<any> {
    this.checkConnection();
    console.log(`[PostgreSQL] 模拟执行查询: ${sql}`);
    if (params && params.length > 0) {
      console.log(`[PostgreSQL] 查询参数:`, params);
    }

    // 直接返回SQL字符串
    return sql;
  }

  // 执行增删改（INSERT/UPDATE/DELETE）
  async execute(sql: string, params?: any[]): Promise<number> {
    this.checkConnection();
    console.log(`[PostgreSQL] 模拟执行操作: ${sql}`);
    if (params && params.length > 0) {
      console.log(`[PostgreSQL] 操作参数:`, params);
    }

    // 模拟操作成功，返回影响行数
    return 1;
  }

  // 断开连接
  async disconnect(): Promise<void> {
    // 模拟断开连接
    console.log('[PostgreSQL] 模拟断开连接...');
    this.isConnected = false;
    console.log(`[PostgreSQL] 模拟断开与 ${this.config.database} 的连接`);
  }

  // 检查连接状态
  private checkConnection(): void {
    if (!this.isConnected) {
      throw new Error('[PostgreSQL] 数据库未连接，请先调用 connect()');
    }
  }
}

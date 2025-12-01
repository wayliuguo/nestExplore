// src/database/mysql.service.ts
import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database.interface';

@Injectable()
export class MySQLService implements DatabaseService {
  private isConnected = false;

  constructor(
    private host: string,
    private port: number,
    private username: string,
    private password: string,
    private database: string,
  ) {}

  async connect(): Promise<void> {
    // 模拟数据库连接
    console.log(
      `[MySQL] Connecting to ${this.host}:${this.port}/${this.database} as ${this.username}...`,
    );
    // 这里应该是真实的 MySQL 客户端连接代码
    // await mysql.createConnection({ ... });
    this.isConnected = true;
    console.log('[MySQL] Connected successfully.');
  }

  async query(sql: string): Promise<any[]> {
    if (!this.isConnected) {
      throw new Error('Not connected to the database.');
    }
    console.log(`[MySQL] Executing query: ${sql}`);
    // 模拟查询
    return Promise.resolve([{ id: 1, name: 'Item from MySQL' }]);
  }

  async disconnect(): Promise<void> {
    // 模拟断开连接
    console.log('[MySQL] Disconnecting...');
    this.isConnected = false;
    console.log('[MySQL] Disconnected.');
  }
}

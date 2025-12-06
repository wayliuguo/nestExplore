import { Injectable, Inject } from '@nestjs/common';
import { DynamicDatabaseConnection } from './interfaces/db-connection.interface';
import { DYNAMIC_DATABASE_CONNECTION } from './constants';

@Injectable()
export class DynamicDatabaseService {
  constructor(
    @Inject(DYNAMIC_DATABASE_CONNECTION)
    private readonly connection: DynamicDatabaseConnection,
  ) {}

  // 查询（SELECT）
  async query(sql: string, params?: any[]): Promise<any> {
    return this.connection.query(sql, params);
  }
}

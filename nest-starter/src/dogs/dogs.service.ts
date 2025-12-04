import { Injectable, Inject } from '@nestjs/common';
import { DynamicDatabaseService } from 'src/dynamic-database/dynamic-database.service';
import { FeatureConfig } from 'src/dynamic-database/dynamic-database.module';

@Injectable()
export class DogsService {
  constructor(
    private readonly dynamicDatabaseService: DynamicDatabaseService,
    @Inject('DOGS_DB_CONFIG') private readonly config: FeatureConfig,
  ) {}

  // 只保留findOne方法，直接返回拼接好的数据库查询语句
  async findOne(id: number) {
    // 使用注入的配置来构建查询语句
    const tableName = this.config.tableName || 'dogs';
    return `SELECT * FROM ${tableName} WHERE id = ${id}`;
  }
}

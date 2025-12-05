import { Injectable, Inject } from '@nestjs/common';
import { DynamicDatabaseService } from 'src/dynamic-database/dynamic-database.service';
import { FeatureConfig } from 'src/dynamic-database/dynamic-database.module';

@Injectable()
export class DogsService {
  constructor(
    private readonly dynamicDatabaseService: DynamicDatabaseService,
    @Inject('DOGS_DB_CONFIG') private readonly config: FeatureConfig,
  ) {}

  // 使用dynamicDatabaseService执行查询，返回SQL字符串
  async findOne(id: number) {
    // 使用注入的配置来构建查询语句
    const tableName = this.config.tableName || 'dogs';
    const sql = `SELECT * FROM ${tableName} WHERE id = ${id}`;
    return this.dynamicDatabaseService.query(sql, [id]);
  }
}

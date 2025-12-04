import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { DynamicDatabaseModule } from 'src/dynamic-database/dynamic-database.module';

@Module({
  controllers: [DogsController],
  providers: [DogsService],
  imports: [
    // 为dogs模块添加特定的数据库配置
    DynamicDatabaseModule.forFeature('dogs', {
      tableName: 'dogs',
      prefix: 'dog_',
    }),
  ],
})
export class DogsModule {}

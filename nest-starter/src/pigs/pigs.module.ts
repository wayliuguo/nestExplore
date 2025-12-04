import { Module } from '@nestjs/common';
import { PigsService } from './pigs.service';
import { PigsController } from './pigs.controller';
import { DynamicDatabaseModule } from 'src/dynamic-database/dynamic-database.module';

@Module({
  controllers: [PigsController],
  providers: [PigsService],
  imports: [
    // 为pigs模块添加特定的数据库配置
    DynamicDatabaseModule.forFeature('pigs', {
      tableName: 'pigs',
      prefix: 'pig_',
    }),
  ],
})
export class PigsModule {}

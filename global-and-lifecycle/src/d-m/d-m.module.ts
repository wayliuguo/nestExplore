import { Module } from '@nestjs/common';
import { DMService } from './d-m.service';
import { DMController } from './d-m.controller';

@Module({
  controllers: [DMController],
  providers: [DMService],
})
export class DMModule {}

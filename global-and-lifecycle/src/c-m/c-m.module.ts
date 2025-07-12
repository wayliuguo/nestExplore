import { Module } from '@nestjs/common';
import { CMService } from './c-m.service';
import { CMController } from './c-m.controller';

@Module({
  controllers: [CMController],
  providers: [CMService],
})
export class CMModule {}

import { Module } from '@nestjs/common';
import { AMService } from './a-m.service';
import { AMController } from './a-m.controller';

@Module({
  controllers: [AMController],
  providers: [AMService],
})
export class AMModule {}

import { Module } from '@nestjs/common';
import { BMService } from './b-m.service';
import { BMController } from './b-m.controller';

@Module({
  imports: [],
  controllers: [BMController],
  providers: [BMService],
})
export class BMModule {}

import { Module } from '@nestjs/common';
import { BMService } from './b-m.service';
import { BMController } from './b-m.controller';
import { AMModule } from 'src/a-m/a-m.module';

@Module({
  imports: [AMModule],
  controllers: [BMController],
  providers: [BMService],
})
export class BMModule {}

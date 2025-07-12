import { Global, Module } from '@nestjs/common';
import { AMService } from './a-m.service';
import { AMController } from './a-m.controller';

@Global()
@Module({
  controllers: [AMController],
  providers: [AMService],
  exports: [AMService],
})
export class AMModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AMModule } from './a-m/a-m.module';
import { BMModule } from './b-m/b-m.module';
import { ASService } from './a-s.service';
import { BSService } from './b-s.service';

@Module({
  imports: [AMModule, BMModule],
  controllers: [AppController],
  providers: [AppService, ASService, BSService],
})
export class AppModule {}

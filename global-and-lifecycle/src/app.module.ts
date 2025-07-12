import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AMModule } from './a-m/a-m.module';
import { BMModule } from './b-m/b-m.module';
import { CMModule } from './c-m/c-m.module';
import { DMModule } from './d-m/d-m.module';

@Module({
  imports: [AMModule, BMModule, CMModule, DMModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

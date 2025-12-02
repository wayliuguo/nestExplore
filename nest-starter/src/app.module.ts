import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { ProviderModuleModule } from './provider-module/provider-module.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [CatsModule, DatabaseModule, ProviderModuleModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

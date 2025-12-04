import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { ProviderModuleModule } from './provider-module/provider-module.module';
import { SharedModule } from './shared/shared.module';
import { DbModule } from './db/db.module';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { DynamicDatabaseModule } from './dynamic-database/dynamic-database.module';
import { DogsModule } from './dogs/dogs.module';
import { PigsModule } from './pigs/pigs.module';
import { DynamicConfigModule } from './dynamic-config/config.module';
import { DynamicConfigService } from './dynamic-config/config.service';

@Module({
  imports: [
    CatsModule,
    DatabaseModule,
    ProviderModuleModule,
    SharedModule,
    DbModule,
    UserModule,
    BookModule,
    ConfigModule.forRoot(), // 添加 ConfigModule
    DynamicConfigModule,
    DynamicDatabaseModule.forRoot(
      new DynamicConfigService(new ConfigService()).getDatabaseConfig(),
    ),
    DogsModule,
    PigsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

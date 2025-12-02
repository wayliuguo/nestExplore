import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { ProviderModuleModule } from './provider-module/provider-module.module';
import { SharedModule } from './shared/shared.module';
import { DbModule } from './db/db.module';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    CatsModule,
    DatabaseModule,
    ProviderModuleModule,
    SharedModule,
    DbModule,
    UserModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

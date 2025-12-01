import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

import { OnModuleDestroy } from '@nestjs/common';
import { DATABASE_SERVICE_TOKEN } from './database/database.module';
import { DatabaseService } from './database/database.interface';

@Controller()
export class AppController implements OnModuleDestroy {
  constructor(
    private readonly appService: AppService,
    @Inject(DATABASE_SERVICE_TOKEN)
    private readonly databaseService: DatabaseService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const results = await this.databaseService.query('SELECT * FROM items');
    return `Hello World! Data from ${this.databaseService.constructor.name}: ${JSON.stringify(results)}`;
  }

  // 在应用关闭时，断开数据库连接
  async onModuleDestroy() {
    await this.databaseService.disconnect();
  }
}

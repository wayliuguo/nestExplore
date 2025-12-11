import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService as NestConfigService,
} from '@nestjs/config';
import { ConfigModule } from './config/config.module';
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

import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SimpleLoggerMiddleware } from './common/middleware/logger/simple-logger.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    CatsModule,
    DatabaseModule,
    ProviderModuleModule,
    SharedModule,
    DbModule,
    UserModule,
    BookModule,
    NestConfigModule.forRoot(), // nestjs 提供的配置模块
    ConfigModule, // 自定义配置模块
    DynamicConfigModule,
    DynamicDatabaseModule.forRoot(
      new DynamicConfigService(new NestConfigService()).getDatabaseConfig(),
    ),
    DogsModule,
    PigsModule,
    // 全局注册JwtModule
    JwtModule.registerAsync({
      global: true,
      imports: [NestConfigModule],
      useFactory: (configService: NestConfigService) => ({
        secret: configService.get('JWT_SECRET', 'default_secret_key'),
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRES_IN', '1h'),
        },
      }),
      inject: [NestConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, LoggerMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // demo一：多种中间件应用到不同路由
    // consumer.apply(LoggerMiddleware).forRoutes(CatsController, DogsController); // 为 CatsController、DogsController 应用 LoggerMiddleware

    // demo二：为所有路由应用中间件，除了GET /cats/*
    // consumer
    //   .apply(LoggerMiddleware)
    //   // 为所有路由应用中间件，除了GET /cats/*
    //   .forRoutes(
    //     // 为所有非GET /cats/*的路由应用中间件
    //     { path: '*', method: RequestMethod.ALL },
    //     // 排除GET /cats/*路由
    //     { path: '!cats/*', method: RequestMethod.GET },
    //   );

    // demo三：功能中间件
    consumer.apply(SimpleLoggerMiddleware).forRoutes('*');
  }
}

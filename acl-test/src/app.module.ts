import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PermissionModule } from './permission/permission.module';
import { User } from './user/entities/user.entity';
import { Permission } from './permission/entities/permission.entity';
import { AaaModule } from './aaa/aaa.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.21.48.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'acl_test',
      synchronize: true,
      logging: true,
      entities: [User, Permission],
      poolSize: 10,
      connectorPackage: 'mysql2',
    }),
    UserModule,
    PermissionModule,
    AaaModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

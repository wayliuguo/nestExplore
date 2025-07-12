import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogMiddleware } from './log.middleware';
import { AMModule } from './a-m/a-m.module';
import { BMModule } from './b-m/b-m.module';

@Module({
  imports: [AMModule, BMModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('a-m'); // Apply LogMiddleware to a-m routes
  }
}

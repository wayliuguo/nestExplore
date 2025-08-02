import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MwMiddleware } from './mw.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(MwMiddleware).forRoutes('*');
    consumer.apply(MwMiddleware).forRoutes({
      path: 'hello*',
      method: RequestMethod.GET,
    });
    consumer.apply(MwMiddleware).forRoutes({
      path: 'world*',
      method: RequestMethod.GET,
    });
  }
}

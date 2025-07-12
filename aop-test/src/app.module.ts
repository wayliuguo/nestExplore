import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogMiddleware } from './log.middleware';
import { AMModule } from './a-m/a-m.module';
import { BMModule } from './b-m/b-m.module';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';
// import { LoginGuard } from './login.guard';

@Module({
  imports: [AMModule, BMModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_FILTER',
      useClass: TestFilter, // Assuming TestFilter is defined in your project
    },
    {
      provide: 'APP_INTERCEPTOR',
      useClass: TimeInterceptor,
    },
    {
      provide: 'APP_PIPE',
      useClass: ValidatePipe,
    },
    // {
    //   provide: 'APP_GUARD',
    //   useClass: LoginGuard,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('a-m'); // Apply LogMiddleware to a-m routes
  }
}

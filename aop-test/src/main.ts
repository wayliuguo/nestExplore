import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request } from 'express';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';
// import { LoginGuard } from './login.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('before:', req.url);
    next();
    console.log('after:');
  });

  // app.useGlobalFilters(new TestFilter()); // Apply TimeInterceptor globally
  // app.useGlobalPipes(new ValidatePipe()); // Apply ValidatePipe globally
  // app.useGlobalInterceptors(new TimeInterceptor());
  // app.useGlobalGuards(new LoginGuard());
  await app.listen(3000);
}
bootstrap();

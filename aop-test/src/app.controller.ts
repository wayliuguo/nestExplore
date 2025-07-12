import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test1')
  @UseGuards(LoginGuard) // Apply LoginGuard to this route
  getTest1(): string {
    console.log('getTest1 called');
    return this.appService.getTest1();
  }

  @Get('test2')
  // @UseInterceptors(TimeInterceptor) // Apply TimeInterceptor to this route
  getTest2(): string {
    console.log('getTest2 called');
    return this.appService.getTest2();
  }
}

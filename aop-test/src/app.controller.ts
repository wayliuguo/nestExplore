import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test1')
  getTest1(): string {
    console.log('getTest1 called');
    return this.appService.getTest1();
  }

  @Get('test2')
  getTest2(): string {
    console.log('getTest2 called');
    return this.appService.getTest2();
  }
}

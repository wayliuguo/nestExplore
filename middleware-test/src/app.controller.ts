import { Controller, Get, Next, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  getHello2(): string {
    return this.appService.getHello();
  }

  @Get('world')
  getWorld(): string {
    return this.appService.getHello();
  }

  @Get('world2')
  getWorld2(@Next() next, @Res({ passthrough: true }) response: Response) {
    return 'hello';
  }
}

import {
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';

@Controller()
// @UsePipes(ValidatePipe) // Apply ValidatePipe globally
// @UseGuards(LoginGuard) // Apply LoginGuard globally
// @UseInterceptors(TimeInterceptor) // Apply TimeInterceptor globally
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

  @Get('test3')
  getTest3(@Query('num', ValidatePipe) num: number) {
    console.log('getTest3 called');
    return num + 1;
  }

  @Get('test4')
  getTest4(@Query('num') num: number) {
    console.log('getTest3 called');
    return num + 1;
  }
}

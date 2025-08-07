import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaInterceptor } from './aaa.interceptor';
import { MapTestInterceptor } from './map-test.interceptor';
import { TapTestInterceptor } from './tap-test.interceptor';
import { CatchErrorTestInterceptor } from './catch-error-test.interceptor';
import { TimeoutInterceptor } from './timeout.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(AaaInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getMap')
  @UseInterceptors(MapTestInterceptor)
  getMap() {
    return {
      a: 1,
      b: 2,
    };
  }

  @Get('getTap')
  @UseInterceptors(TapTestInterceptor)
  getTap() {
    return 'tap';
  }

  @Get('getError')
  @UseInterceptors(CatchErrorTestInterceptor)
  getError() {
    throw new Error('error');
  }

  @Get('getTimeout')
  @UseInterceptors(TimeoutInterceptor)
  async getTimeout() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return {
      message: 'This will timeout',
    };
  }
}

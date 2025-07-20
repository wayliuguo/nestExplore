import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { TestGuard } from './test.guard';
import { Test } from './test.decorator';
import { Test2 } from './test2.decorator';
import { Test3 } from './test3.decorator';
import { MyHeaders } from './my-headers.decorator';
import { MyQuery } from './my-query.decorator';
import { Test4 } from './test4.decorator';
import { Test5 } from './test5.decorator';

// @Test4()
// @Controller()
@Test5('test5', 'well')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Test('test', 'admin')
  @UseGuards(TestGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Test2('/hello2', 'admin')
  getHello2(): string {
    return this.appService.getHello();
  }

  @Get('/hello3')
  getHello3(@Test3() test3: string): string {
    return test3;
  }

  @Get('/hello4')
  getHello4(@MyHeaders('Accept') headers1, @MyHeaders('Accept') headers2) {
    return headers1 + ' ' + headers2;
  }

  @Get('/hello5')
  getHello5(@MyQuery('aaa') aaa: string, @MyQuery('bbb') bbb: string) {
    return `aaa: ${aaa}, bbb: ${bbb}`;
  }
}

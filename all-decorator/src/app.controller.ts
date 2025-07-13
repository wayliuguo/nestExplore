import {
  Controller,
  Get,
  Inject,
  Optional,
  SetMetadata,
  UseGuards,
  Headers,
  Session,
  Req,
  HttpCode,
  Header,
  Redirect,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Well } from './well';
import { TestGuard } from './test.guard';
import { Request } from 'express';

@Controller()
@SetMetadata('roles', ['user'])
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Optional()
  @Inject('well')
  private readonly well: Well;

  @Get()
  @UseGuards(TestGuard)
  @SetMetadata('roles', ['admin'])
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-header')
  testHeader(
    @Headers('test-header') testHeader: string,
    @Headers() headers: Record<string, any>,
  ): string {
    console.log('Test Header:', testHeader);
    console.log('All Headers:', headers);
    return testHeader;
  }

  @Get('/session')
  session(@Session() session) {
    if (!session.count) {
      session.count = 0;
    }
    session.count = session.count + 1;
    return session.count;
  }

  @Get('test-req')
  testReq(@Req() req: Request) {
    console.log(req.hostname);
    console.log(req.url);
    return req.hostname + ' ' + req.url;
  }

  @Get('test-httpcode')
  @HttpCode(201)
  testHttpCode() {
    return 'http code test';
  }

  @Get('test-setheader')
  @Header('aaa', 'bbb')
  testSetHeader(): string {
    return 'test-set-header';
  }

  @Get('test-redirect')
  @Redirect('https://www.example.com', 302)
  testRedirect() {
    return { url: 'https://www.example.com' };
  }
}

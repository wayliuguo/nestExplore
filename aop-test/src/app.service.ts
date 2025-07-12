import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest1(): string {
    return 'Test 1';
  }

  getTest2(): string {
    return 'Test 2';
  }
}

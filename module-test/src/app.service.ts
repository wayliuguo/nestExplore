import { Injectable } from '@nestjs/common';
import { ASService } from './a-s.service';
import { BSService } from './b-s.service';

@Injectable()
export class AppService {
  constructor(private readonly asService: ASService, private readonly bsService: BSService) {}
  getHello(): string {
    return this.asService.getHello() + ' & ' + this.bsService.getHello();
  }
}

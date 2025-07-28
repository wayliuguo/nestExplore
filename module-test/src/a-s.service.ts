import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { BSService } from './b-s.service';

@Injectable()
export class ASService {
  constructor(@Inject(forwardRef(() => BSService)) private readonly bsService: BSService) {}

  getHello(): string {
    return `Hello from ASService!`;
  }
}

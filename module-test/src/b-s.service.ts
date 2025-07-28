import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ASService } from './a-s.service';

@Injectable()
export class BSService {
  constructor(@Inject(forwardRef(() => ASService)) private readonly asService: ASService) {}
  getHello(): string {
    return `Hello from BSService!`;
  }
}

import { Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class Well {
  constructor(private appService: AppService) {}
}

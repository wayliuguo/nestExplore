import { Controller, Get, Inject } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } from './b-m.module-definition';

@Controller('b-m')
export class BMController {
  @Inject(MODULE_OPTIONS_TOKEN)
  private options: typeof OPTIONS_TYPE;

  @Get()
  getOptions() {
    return this.options;
  }
}

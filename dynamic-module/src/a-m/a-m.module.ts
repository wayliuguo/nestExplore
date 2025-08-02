import { DynamicModule, Module } from '@nestjs/common';
import { AMService } from './a-m.service';
import { AMController } from './a-m.controller';

@Module({
  // controllers: [AMController],
  // providers: [AMService],
})
export class AMModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: AMModule,
      controllers: [AMController],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        AMService,
      ],
      exports: [],
    };
  }
}

import { Module } from '@nestjs/common';
import { BMController } from './b-m.controller';
import { ConfigurableModuleClass } from './b-m.module-definition';

@Module({
  controllers: [BMController],
})
export class BMModule extends ConfigurableModuleClass {}

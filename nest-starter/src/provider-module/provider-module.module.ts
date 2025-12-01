import { Module } from '@nestjs/common';
import { ProviderModuleService } from './provider-module.service';
import { ProviderModuleController } from './provider-module.controller';

const config = {
  apiKey: 'secret-key',
  endpoint: 'https://api.example.com',
};

@Module({
  controllers: [ProviderModuleController],
  providers: [ProviderModuleService, { provide: 'CONFIG', useValue: config }],
})
export class ProviderModuleModule {}

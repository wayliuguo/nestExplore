import { Controller, Get } from '@nestjs/common';
import { ProviderModuleService } from './provider-module.service';

@Controller('provider-module')
export class ProviderModuleController {
  constructor(private readonly providerModuleService: ProviderModuleService) {}

  @Get('endpoint')
  getEndpoint() {
    return this.providerModuleService.getEndpoint();
  }
}

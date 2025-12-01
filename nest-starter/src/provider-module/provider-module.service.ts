import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ProviderModuleService {
  constructor(@Inject('CONFIG') private config: any) {}

  getEndpoint() {
    return this.config.endpoint;
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { AMService } from './a-m.service';

describe('AMService', () => {
  let service: AMService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AMService],
    }).compile();

    service = module.get<AMService>(AMService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

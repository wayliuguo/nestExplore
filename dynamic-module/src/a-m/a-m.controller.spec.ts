import { Test, TestingModule } from '@nestjs/testing';
import { AMController } from './a-m.controller';
import { AMService } from './a-m.service';

describe('AMController', () => {
  let controller: AMController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AMController],
      providers: [AMService],
    }).compile();

    controller = module.get<AMController>(AMController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

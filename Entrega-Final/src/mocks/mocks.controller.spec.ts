import { Test, TestingModule } from '@nestjs/testing';
import { MocksController } from './mocks.controller';
import { MocksService } from './mocks.service';

describe('MocksController', () => {
  let controller: MocksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MocksController],
      providers: [MocksService],
    }).compile();

    controller = module.get<MocksController>(MocksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

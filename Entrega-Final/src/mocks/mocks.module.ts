import { Module } from '@nestjs/common';
import { MocksService } from './mocks.service';
import { MocksController } from './mocks.controller';

@Module({
  controllers: [MocksController],
  providers: [MocksService],
})
export class MocksModule {}

import { Module } from '@nestjs/common';
import { PoolService } from './pool.service';
import { PoolController } from './pool.controller';

@Module({
  controllers: [PoolController],
  providers: [PoolService],
})
export class PoolModule {}

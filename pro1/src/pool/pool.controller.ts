import { Body, Controller, Get, Post} from '@nestjs/common';
import { PoolService } from './pool.service';
import { CreatePoolDto } from './dto/create-pool.dto';
import { UpdatePoolDto } from './dto/update-pool.dto';
import { QueryPoolDto } from './dto/query-pool.dto';

@Controller('pool')
export class PoolController {
  constructor(private readonly poolService: PoolService) {}

  @Post()
  create(@Body() createPoolDto: CreatePoolDto) {
    return this.poolService.create(createPoolDto);
  }
  @Post()
  query(@Body() queryPoolDto: QueryPoolDto) {
    return this.poolService.query(queryPoolDto);
  }
}

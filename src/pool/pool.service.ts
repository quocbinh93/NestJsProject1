import { Injectable } from '@nestjs/common';
import { CreatePoolDto } from './dto/create-pool.dto';
import { QueryPoolDto } from './dto/query-pool.dto';
import { UpdatePoolDto } from './dto/update-pool.dto';
import { Pool } from './entities/pool.entity';
import { queryPoolResponseDto } from './dto/query-pool-response.dto';

@Injectable()
export class PoolService {
  [x: string]: any;
  pools: Pool[] = [];

  create(createPoolDto: CreatePoolDto) {
    console.log(createPoolDto);

    let isAppended = false;
    this.pools.forEach((element) => {
      if (createPoolDto.poolId == element.poolId) {
        // eslint-disable-next-line prettier/prettier
        element.poolValues = element.poolValues.concat(createPoolDto.poolValues);
        isAppended = true;
      }
    });
    if (isAppended == false) {
      const newPool = new Pool();
      newPool.poolId = createPoolDto.poolId;
      newPool.poolValues = createPoolDto.poolValues;

      this.pools.push(newPool);

      console.log('New pool list:', this.pools);
      return 'Inserted';
    } else {
      console.log('New pool list:', this.pools);
      return 'Appended';
    }
  }
  query(queryPoolDto: QueryPoolDto) {
      pool = {}; //Tim pool trong this.pool where poolId queryPoolDto.poolld
      calculatedQuantile = calculatedQuantile(pool, queryPoolDto.percentile);

      queryPoolResponseDto = new queryPoolResponseDto();
      queryPoolResponseDto.calculatedQuantile = calculatedQuantile;
      queryPoolResponseDto.count = pool.poolValues.length;
      return queryPoolResponseDto;
  }
}

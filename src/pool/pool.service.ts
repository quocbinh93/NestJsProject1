import { Injectable } from '@nestjs/common';
import { CreatePoolDto } from './dto/create-pool.dto';
import { QueryPoolDto } from './dto/query-pool.dto';
import { UpdatePoolDto } from './dto/update-pool.dto';
import { Pool } from './entities/pool.entity';
import { QueryPoolResponseDto } from './dto/query-pool-response.dto';

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
    // 1. @TODO: Tim pool trong this.pools where poolId queryPoolDto.poolId: pool = ???
    Pool = {};
    // 2. @TODO: Tinh calculatedQuantize
    this.calculatedQuantize = this.calculatedQuantize(Pool, QueryPoolDto.percentile);
    // 3. @TODO: Tra ve ket qua
    const queryPoolResponseDto = new queryPoolResponseDto();
    queryPoolResponseDto.calculatedQuantile = this.calculatedQuantize;
    queryPoolResponseDto.count = Pool.poolValues.length;

    return queryPoolResponseDto;
  }
  calculatedQuantize(pool: Pool, per: number):number {
    //@TODO: Tinh quantile tu pool va per
    //return ket qua tinh duoc
    let x: Element = this.getElement(QueryPoolDto.poolId);
    if (!x) : return 'notFound' ;
    this.poolValues.sort();
    let n = this.poolValues.length;
    let rank = QueryPoolDto.percentile/100;
    let res: number = rank * n;
    if (res % 1 !== 0) res = Math.floor(res) + 1;
    return this.poolValues[res - 1];
  }
}

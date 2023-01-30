import { Pool } from "../entities/pool.entity";

export class QueryPoolDto {
  static percentile(Pool: Pool, percentile: any): (pool: import("../entities/pool.entity").Pool, per: number) => number {
    throw new Error('Method not implemented.');
  }
  static poolId(poolId: any): Element {
    throw new Error('Method not implemented.');
  }
  poolId: number;
  percentile: number;
}

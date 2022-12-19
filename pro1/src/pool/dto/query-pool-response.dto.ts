import { QueryPoolDto } from './dto/query-pool.dto';
import { CreatePoolDto } from './create-pool.dto';
export class queryPoolResponseDto {
    const x: Element = this.getElement(queryPoolDto.poolId);
    if (!x) : return 'notFound';
    this.poolValues.sort();
    const n = this.poolValues.length;
    const rank = queryPoolDto.percentile / 100;
    let res: number = rank * n;
    if (res % 1 !== 0) res = Math.floor(res) + 1;
    return this.poolValues[res - 1];
}

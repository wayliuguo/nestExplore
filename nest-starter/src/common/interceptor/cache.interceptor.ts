import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

// 简单的内存缓存
const cache = new Map<string, any>();

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  constructor(private readonly ttl: number = 30000) {} // 默认30秒缓存

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const key = `${request.method}-${request.url}`;

    // 检查缓存是否存在且未过期
    const cached = cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.ttl) {
      // 缓存命中，返回缓存数据
      console.log('Cache hit for key:', key);
      return of(cached.data);
    }

    return next.handle().pipe(
      tap((data) => {
        // 将结果存入缓存
        cache.set(key, {
          data,
          timestamp: Date.now(),
        });
      }),
    );
  }
}

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before method execution...');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(`After method execution... ${Date.now() - now}ms`),
        ),
      );
  }
}

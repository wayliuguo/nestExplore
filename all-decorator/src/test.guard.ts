import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class TestGuard implements CanActivate {
  @Inject(Reflector)
  private readonly reflector: Reflector;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const classMetadata = this.reflector.get<string[]>(
      'roles',
      context.getClass(),
    );
    const methodMetadata = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    console.log('Class Metadata:', classMetadata);
    console.log('Method Metadata:', methodMetadata);

    return true;
  }
}

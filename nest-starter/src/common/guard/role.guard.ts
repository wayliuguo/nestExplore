// src/auth/roles.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core'; // Reflector用于读取元数据
import { ROLES_KEY } from './roles.decorator';
import { Request } from 'express';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector, // 注入Reflector读取@Roles装饰器的元数据
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 1. 读取当前路由需要的角色（从@Roles装饰器）
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [
        context.getHandler(), // 先读方法级的@Roles
        context.getClass(), // 再读控制器级的@Roles（兜底）
      ],
    );

    // 2. 如果路由没有标记角色，直接允许访问
    if (!requiredRoles) {
      return true;
    }

    // 3. 从request中提取用户角色
    const request = context.switchToHttp().getRequest<Request>();
    const user = (request as any).user as { username: string; role: string };

    // 4. 检查用户角色是否包含在路由需要的角色中
    const hasRole = requiredRoles.includes(user.role);
    if (!hasRole) {
      throw new ForbiddenException('你没有访问该接口的权限');
    }

    return true;
  }
}
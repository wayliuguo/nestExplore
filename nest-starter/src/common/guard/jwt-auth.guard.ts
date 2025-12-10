import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 1. 获取请求对象
    const request = context.switchToHttp().getRequest<Request>();

    // 2. 提取 Token（从 Authorization 头：Bearer <token>）
    const authHeader = request.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException(
        'Authorization header missing or invalid',
      );
    }

    const token = authHeader.split(' ')[1];

    // 3. 验证 Token
    try {
      const payload = this.jwtService.verify(token);
      // 将解码后的用户信息挂载到 request 对象，供后续控制器使用
      (request as any).user = payload;

      // 4. 将解析后的用户信息挂载到request上,用于给到下一个授权守卫使用
      (request as any).user = payload;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
    return true;
  }
}

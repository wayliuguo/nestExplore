import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class TestGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // 切换到HTTP上下文
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest(); // 获取Express/Fastify请求对象
    const response = httpContext.getResponse();

    // 打印当前路由信息
    console.log('当前控制器:', context.getClass().name);
    console.log('当前方法:', context.getHandler().name);

    return true; // 返回true允许访问，false拒绝
  }
}

import { applyDecorators, Get, UseGuards } from '@nestjs/common';
import { Test } from './test.decorator';
import { TestGuard } from './test.guard';

export function Test2(path, role) {
  return applyDecorators(
    Get(path),
    Test(role), // 使用自定义装饰器 Test
    UseGuards(TestGuard), // 使用自定义守卫 TestGuard
  );
}

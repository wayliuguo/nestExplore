import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Test3 = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    return 'test3';
  },
);

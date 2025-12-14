import { createParamDecorator, ExecutionContext } from "@nestjs/common";

// user-property.decorator.ts
export const UserProperty = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user?.[data] : user;
  },
);
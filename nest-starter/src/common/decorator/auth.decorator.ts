// auth.decorator.ts
import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { Roles } from '../guard/roles.decorator';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { RolesGuard } from '../guard/role.guard';

export function Auth(...roles: string[]) {
  return applyDecorators(
    Roles(...roles),
    UseGuards(JwtAuthGuard),
    UseGuards(RolesGuard),
  );
}
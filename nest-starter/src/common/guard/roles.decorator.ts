import { SetMetadata } from '@nestjs/common';

// 定义元数据key：'roles'
export const ROLES_KEY = Symbol('roles');
// 装饰器：@Roles('admin', 'user')
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

import { applyDecorators, Controller, SetMetadata } from '@nestjs/common';

export const Test5 = (path, metadata) => {
  return applyDecorators(Controller(path), SetMetadata('test5', metadata));
};

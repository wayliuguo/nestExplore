import { forwardRef, Module } from '@nestjs/common';
import { BMModule } from 'src/b-m/b-m.module';

@Module({
  imports: [
    forwardRef(() => BMModule), // Use forwardRef to avoid circular dependency
  ],
})
export class AMModule {}

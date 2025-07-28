import { forwardRef, Module } from '@nestjs/common';
import { AMModule } from 'src/a-m/a-m.module';

@Module({
  imports: [
    forwardRef(() => AMModule), // Use forwardRef to avoid circular dependency
  ],
})
export class BMModule {}

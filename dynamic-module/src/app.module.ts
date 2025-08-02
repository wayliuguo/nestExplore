import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AMModule } from './a-m/a-m.module';
import { BMModule } from './b-m/b-m.module';

@Module({
  imports: [
    AMModule.register({
      a: 'a',
      b: 'b',
    }),
    BMModule.register({
      a: 1,
      b: 2,
      isGlobal: true,
    }),
    // BMModule.registerAsync({
    //   useFactory: async () => {
    //     await new Promise((resolve) => setTimeout(resolve, 1000));
    //     return {
    //       a: 3,
    //       b: 4
    //     };
    //   },
    //   inject: [],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

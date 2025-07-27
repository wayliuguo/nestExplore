import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AMException } from './a-m-exception';
import { Response, Request } from 'express';

@Catch(AMException)
export class AMFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    if (host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();

      response.status(500).json({
        message1: exception['message1'],
        message2: exception['message2'],
      });
    } else if (host.getType() === 'ws') {
    } else if (host.getType() === 'rpc') {
    }
  }
}

import { Request, Response, NextFunction } from 'express';

// 纯函数中间件
export function SimpleLoggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(`Simple Logger: ${req.method} ${req.url}`);
  next();
}

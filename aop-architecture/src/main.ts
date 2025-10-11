import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { TimeInterceptor } from './time.interceptor';
// import { LoginGuard } from './login.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局中间件
  app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log('全局中间件 before', req.url);
    next();
    console.log('全局中间件 after');
  });
  // 全局守卫
  // app.useGlobalGuards(new LoginGuard());
  // 全局拦截器
  // app.useGlobalInterceptors(new TimeInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

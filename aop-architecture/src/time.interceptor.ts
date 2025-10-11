import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class TimeInterceptor implements NestInterceptor {
  @Inject(AppService)
  private appService: AppService;
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startTime = Date.now();
    return next.handle().pipe(
      tap(() => {
        console.log(
          `拦截器 Time: ${Date.now() - startTime}`,
          this.appService.getHello(),
        );
      }),
    );
  }
}

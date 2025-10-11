import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';

@Controller()
// @UseInterceptors(TimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('handler...');
    return this.appService.getHello();
  }

  @UseGuards(LoginGuard)
  // @UseInterceptors(TimeInterceptor)
  @Get('aaa')
  aaa(): string {
    console.log('handler aaa...');
    return 'aaa';
  }

  @Get('bbb')
  bbb(): string {
    console.log('handler bbb...');
    return 'bbb';
  }
}

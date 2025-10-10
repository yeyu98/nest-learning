import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('handler...');
    return this.appService.getHello();
  }

  @UseGuards(LoginGuard)
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

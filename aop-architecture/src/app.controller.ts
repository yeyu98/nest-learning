import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('handler...');
    return this.appService.getHello();
  }

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

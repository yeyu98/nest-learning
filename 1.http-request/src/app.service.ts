/*
 * @Author: yeyu98
 * @Date: 2025-10-04 14:40:46
 * @LastEditors: yeyu98
 * @LastEditTime: 2025-10-04 16:30:35
 * @Description:
 */
import { Inject, Injectable } from '@nestjs/common';
import { PersonService } from './person/person.service';

@Injectable()
export class AppService {
  @Inject(PersonService)
  private personService: PersonService;

  getHello(): string {
    return 'Hello World!' + this.personService.sayHello();
  }
}

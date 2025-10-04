/*
 * @Author: yeyu98
 * @Date: 2025-10-04 14:42:18
 * @LastEditors: yeyu98
 * @LastEditTime: 2025-10-04 14:44:15
 * @Description:
 */
import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonDto } from './create-person.dto';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export class UpdatePersonDto extends PartialType(CreatePersonDto) {}

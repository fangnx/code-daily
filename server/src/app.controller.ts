import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

export class BaseQuery {
  page: number;
  pagesize: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}

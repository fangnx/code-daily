import { Controller, Get, Query } from '@nestjs/common';

@Controller('')
export class AppController {
  constructor() {}

  @Get('')
  public GetApp() {
    return `Hello, the API is working :)`;
  }
}
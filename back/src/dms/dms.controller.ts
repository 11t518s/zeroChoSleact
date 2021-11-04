import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Query('perPage') perPage, @Query('page') page) {
    console.log(perPage, page);
  }

  @Post(':id/Chats')
  postChat(@Body() body) {
    body;
  }
}

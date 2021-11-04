import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getAllChannels() {}

  @Post()
  postSpecificChannels() {}

  @Get(':name')
  createChannel() {}

  @Get(':name/chats')
  getChat(@Query('perPage') perPage, @Query('page') page) {
    console.log(perPage, page);
  }

  @Post(':name/Chats')
  postChat(@Body() body) {
    body;
  }

  @Get(':name/members')
  getAllMembers() {}

  @Post(':name/members')
  inviteMembers() {}
}

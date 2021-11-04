import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {}

  @Post()
  createWorkspace() {}

  @Get(':url/members')
  getAllMembersFromWorkspace() {}

  @Post(':url/members')
  ginviteMembersToWorkspace() {}

  @Delete(':url/members/:id')
  KickMembersFromWorkspace() {}

  @Get(':url/members/:id')
  getMemberInfoInWorkspace() {}
}

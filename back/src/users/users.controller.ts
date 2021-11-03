import { UsersService } from './users.service';
import { JoinRequestDto } from './dto/join.request.dto';
import { Controller, Post, Get, Req, Res, Body } from '@nestjs/common';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @Post()
  postUser(@Body() body: JoinRequestDto) {
    this.usersService.postUsers(body.email, body.nickname, body.password);
    return;
  }

  @Post('login')
  login(@Req() req) {
    return req.user;
  }

  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}

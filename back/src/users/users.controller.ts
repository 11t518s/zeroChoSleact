import { UsersService } from './users.service';
import { Controller, Post, Get, Req, Res, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { JoinRequestDto } from 'src/common/dto/join.request.dto';
import { User } from 'src/common/decorators/user.decorator';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(@User() user) {
    return user;
  }

  @Post()
  postUser(@Body() body: JoinRequestDto) {
    this.usersService.postUsers(body.email, body.nickname, body.password);
    return;
  }

  @Post('login')
  login(@User() user) {
    return user;
  }

  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}

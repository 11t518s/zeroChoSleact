import { UndefinedToNullInterceptor } from './../common/interceptors/undefined.to.null.interceptor';
import { UsersService } from './users.service';
import {
  Controller,
  Post,
  Get,
  Req,
  Res,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JoinRequestDto } from 'src/common/dto/join.request.dto';
import { User } from 'src/common/decorators/user.decorator';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('USER')
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

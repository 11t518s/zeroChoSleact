import { Post } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({ example: '11tasdf@naver.com', description: 'email' })
  public email: string;

  @ApiProperty({ example: 'nickname', description: 'nickname' })
  public nickname: string;

  @ApiProperty({ example: 'secret', description: 'password' })
  public password: string;
}

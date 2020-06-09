import {JsonController, Param, Body, Get, Post, Put, Delete} from 'routing-controllers';

@JsonController('/ping')
export default class PingController {
  @Get('/')
  getAll(): string {
    return 'GET PING';
  }

  @Get('/:id')
  getOne(@Param('id') id: number): number {
    return id;
  }

  @Post('/')
  post(@Body() user: {id: number, email: string}): {id: number, email: string} {
    return user;
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() user: {id: number, email: string}):boolean {
    return id && user ? true : false;
  }

  @Delete('/:id')
  remove(@Param('id') id: number): number {
    return id;
  }
}

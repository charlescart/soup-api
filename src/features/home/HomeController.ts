/* eslint-disable class-methods-use-this */
import { Get, JsonController, Res } from 'routing-controllers';
import { Response } from 'express';

@JsonController()
export default class AuthController {
  @Get('/')
  home(@Res() res: Response): Response {
    const port = process.env.PORT || 3000;
    return res.json({ message: `Api is running in ${port}` });
  }
}

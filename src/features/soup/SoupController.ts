/* eslint-disable class-methods-use-this */
import {
  JsonController, Body, Post,
} from 'routing-controllers';
import Soup from './validators/soupDto';
import SoupRepository from './SoupRepository';

@JsonController('/soup')
export default class AuthController {
  @Post('/')
  soup(@Body() soup: Soup): unknown {
    return SoupRepository.Soup(soup);
  }
}

/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import {
  JsonController, Body, Post, UploadedFile,
} from 'routing-controllers';
import fileUploadOptions from '../../config/fileUploadOptions';
import Soup from './validators/soupDto';
import SoupRepository from './SoupRepository';

@JsonController('/soup')
export default class AuthController {
  @Post('/')
  soup(@Body() soup: Soup): unknown {
    // @UploadedFile('soupFile', { options: fileUploadOptions }) file: unknown
    return SoupRepository.Soup(soup);
  }
}

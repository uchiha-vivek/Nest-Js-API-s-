import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next:NextFunction) {
    console.log('This is middleware')
    console.log(req.headers.authorization)
    const {authorization} =req.headers
    // if not authorized
    if (!authorization)
    throw new HttpException('Invalid authorization Token', HttpStatus.FORBIDDEN)
  //hard code validation
  if(authorization ==='viveksharma')
    next();
  else
  throw new HttpException(
    'Invalid token',
    HttpStatus.FORBIDDEN            
    )
  }
}

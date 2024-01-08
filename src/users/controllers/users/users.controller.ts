import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post,Query,Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response  } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUserDto';
import { UsersService } from 'src/users/services/users/users.service';
 
// base url is /users
@Controller('users')
export class UsersController {

    constructor(private userService:UsersService){

    }
        // get requests

    @Get()
    getUsers(){
        return this.userService.fetchUsers();
    }    
    // @Get() 
    // getUsers(){
    //     return { username:'vivek' , email:'vivek@gmail.com'}
    // }
    @Get('immer')
    getUsersMedia(){
        return {msg:'I am employee of immer'}
    }
    @Get('immer/comment')
    getUsersComments(){
        return { msg:"Immer is an excellent platform"}
    }

    //post request
    @Post()
    createUser_1(@Req() request:Request, @Res() response:Response ){
        console.log(request.body)
        response.send('created')

    }
    @Post('music')
    createMusicData(@Req() request:Request, @Res() response:Response){
        response.send(request.body)
        console.log(request.body)
    }
    @Post('music/createlaylist')
    createMusicPlaylist(@Req() request:Request, @Res() response:Response){
                response.send(request.body)
                console.log(request.body)        
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData:CreateUserDto){
        console.log(userData)
         return this.userService.createUser(userData)
        // return {}

    }
    //params
    // @Get(':id')
    // getUserById(@Req() request:Request, @Res() response:Response){
    //       console.log(request.params)
    //       response.send('')
    // }
    @Get(':id/:postId')
    getUserById(@Param('id',ParseIntPipe) id:number , @Param('postId') postId:number){
        console.log(id)
        return {id,postId}
    }
    @Get('uid/:uid')
    getUserUidNumber(@Param('uid') uid:string){
        console.log(uid)
        return {uid}
    }

    // query params are best used for filtering
    @Get('query')
    getQueryParams(@Query('sortBy') sortBy:string){
        console.log(sortBy)
        return[{username:'Vivek Sharma'}]
    }

    @Get('queryuser')
    getUserQuery(@Query('sortUser') sortUser:string){
        console.log(sortUser)
        return[{username:"User registerd successfully"}]
    }
    @Get(':id')
    getNewUserId(@Param('id',ParseIntPipe) id:number){
      const user =    this.userService.fetchUserById(id)
      if (!user) throw new HttpException('User not found',HttpStatus.BAD_REQUEST) // if user is not found
        return user // if user is found

    }
     
}

import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateUserDto{
    //validation on username
    @IsNotEmpty()
    username:string;
    // validation on email
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    age:number
}
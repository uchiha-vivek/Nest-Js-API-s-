import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers=[
        {username:'Vivek Sharma', email:'vs160125@gmail.com'},
        {username:"Prit Mehta", email:"prit1234@gmail.com"}
    ]
    fetchUsers(){
        return this.fakeUsers
    }


    createUser(userDetails: CreateUserType){
        this.fakeUsers.push(userDetails)
        return

    }

    fetchUserById(id:number){
        // return{id:2,username:"Harsh Prakash",email:"viv@gmail.com"}
        return null
    }
}

import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {

    constructor(private userServive: UserService) {}

    @Post('/login')
    async login(@Body() loginDto: any ) {
        const user = await this.userServive.getUserByEmail(loginDto.email);
        if(user) {
            if(user.password === loginDto.password){
                return user;
            }
            else {
                return "Password doesn't match";
            }
        }
        else {
            return 'User not found';
        }
    }
}

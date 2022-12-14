import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private authServive: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req: any ) {
        return this.authServive.login(req.user);
    }
}

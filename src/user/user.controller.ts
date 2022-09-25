import { Controller, Get, Param, Patch, Post, Delete, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";


@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    store(@Req() req: Request) {
        return this.userService.create(req);
    }

    @Patch('/:userId')
    update(@Req() req: Request, @Param() params: {userId: number}) {
        return this.userService.update(req, params);
    }

    @Get('/:userId')
    getUser(@Param() params: {userId: number}) {
        return this.userService.getUser(params);
    }

    @Delete('/:userId')
    deleteUser(@Param() params: {userId: number}) {
        return params;
    }
}
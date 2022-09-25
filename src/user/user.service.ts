import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    getUsers() {
        return [
            {
                name: 'Pavel Parvej',
                age: 29
            },
            {
                name: 'Shapla Parvej',
                age: 22
            }
        ];
    }

    create(createUserDto: CreateUserDto) {
        return createUserDto;
    }

    update(
        updateUserDto: UpdateUserDto, userId: number) {
        return {body: updateUserDto, userId};
    }

    getUser(userId: number) {
        return userId;
    }

    delete(userId: number) {
        return userId;
    }
}

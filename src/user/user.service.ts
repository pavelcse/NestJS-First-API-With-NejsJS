import { Injectable } from '@nestjs/common';
import { Request } from 'express';

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

    create(req:Request) {
        return req.body;
    }

    update(req:Request, param: {userId: number}) {
        return {body: req.body, param};
    }

    getUser(param: {userId: number}) {
        return param;
    }

    delete(param: {userId: number}) {
        return param;
    }
}

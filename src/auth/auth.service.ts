import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userServive: UserService) {}

    async validateUser(email: string, password: string) {
        const user = await this.userServive.getUserByEmail(email);
        if (user && user.password === password) {
            return user;
          }
          return null;
    }
}

import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.sto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: '43234',
    },
    {
      userId: '101',
      stripeUserId: '27279',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    // return getUserRequest.userId;
    return this.users.find((user) => user.userId == getUserRequest.userId);
  }
}

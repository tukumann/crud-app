import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
<<<<<<< HEAD
    return 'Hello World on the Port!';
=======
    return 'Hello World!';
>>>>>>> master
  }
}

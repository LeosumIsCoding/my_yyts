import { Injectable } from '@nestjs/common';

@Injectable()
export class MainService {
    getHello(): string {
        return `<h1 style='color:red;'>Hello World!</h1>`;
    }
}

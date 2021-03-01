import { Injectable } from '@nestjs/common';
import { MessageService } from './message.service'

@Injectable()
export class GreetService {
    constructor(private message: MessageService){}
    greet(): void {
        console.log(this.message.getHello());
    }
}


